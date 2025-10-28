"use client";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, ReactThreeFiber, extend, Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody,
  Physics,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Dùng any để tương thích mọi phiên bản @react-three/fiber
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

const segmentProps = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 2,
  linearDamping: 2,
} as const;

// Tham số tinh chỉnh bổ sung (nếu muốn dịch ảnh sau khi đã canh giữa tự động)
const FACE_TEXTURE_TWEAK = {
  // Dịch ảnh sau khi căn giữa (x: phải +, y: lên +)
  deltaOffset: new THREE.Vector2(0.0, 0.02),
  // Phóng to nhẹ để không thấy viền
  scale: 1.05,
  rotation: 0, // xoay (radian). Ví dụ Math.PI/2 = 90 độ
} as const;

function BandInner({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<RapierRigidBody>(null!);
  const j2 = useRef<RapierRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);

  const card = useRef<RapierRigidBody>(null!);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  const { nodes, materials } = useGLTF(
    'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb'
  ) as unknown as { nodes: any; materials: any };
  // Ảnh mặt thẻ (avatar)
  const faceTexture = useTexture('/image/avt.jpg');
  faceTexture.flipY = false;
  faceTexture.wrapS = faceTexture.wrapT = THREE.ClampToEdgeWrapping;
  faceTexture.center.set(0.5, 0.5);
// Tỉ lệ mặt thẻ (theo collider)
const CARD_ASPECT = 0.9 / 1.125; // width / height

if ((faceTexture as any).image) {
  const img: any = (faceTexture as any).image;
  const imageAspect = img.width / img.height;

  // 🟢 CHẾ ĐỘ COVER – luôn phủ kín thẻ, giữ tỉ lệ gốc, crop giữa
  let rx = 1;
  let ry = 1;

  if (imageAspect > CARD_ASPECT) {
    // Ảnh quá ngang -> cắt hai bên
    rx = CARD_ASPECT / imageAspect;
    ry = 1;
  } else {
    // Ảnh quá cao -> cắt trên dưới
    rx = 1;
    ry = imageAspect / CARD_ASPECT;
  }

  // Áp dụng scale và offset tinh chỉnh
  rx *= FACE_TEXTURE_TWEAK.scale;
  ry *= FACE_TEXTURE_TWEAK.scale;

  faceTexture.repeat.set(rx, ry);
  faceTexture.offset.set(
    0.5 - rx / 2 + FACE_TEXTURE_TWEAK.deltaOffset.x,
    0.5 - ry / 2 + FACE_TEXTURE_TWEAK.deltaOffset.y
  );

  faceTexture.wrapS = faceTexture.wrapT = THREE.ClampToEdgeWrapping;
  faceTexture.flipY = false;
  faceTexture.center.set(0.5, 0.5);
  faceTexture.rotation = FACE_TEXTURE_TWEAK.rotation;
  faceTexture.needsUpdate = true;
}

// Canvas wrapper sẽ được export ở cuối file


  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);

  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
    return () => void (document.body.style.cursor = "auto");
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !band.current ||
      !card.current
    )
      return;

    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      const [j1Lerped, j2Lerped] = [j1, j2].map((ref) => {
        if (ref.current) {
          const lerped = new THREE.Vector3().copy(ref.current.translation());

          const clampedDistance = Math.max(
            0.1,
            Math.min(1, lerped.distanceTo(ref.current.translation()))
          );

          return lerped.lerp(
            ref.current.translation(),
            delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
          );
        }
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2Lerped ?? j2.current.translation());
      curve.points[2].copy(j1Lerped ?? j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(16));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        false
      );
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[0, 4.6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.25, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              (e.target as Element)?.releasePointerCapture(e.pointerId),
              drag(false)
            )}
            onPointerDown={(e) => (
              (e.target as Element)?.setPointerCapture(e.pointerId),
              card.current &&
                drag(
                  new THREE.Vector3()
                    .copy(e.point)
                    .sub(vec.copy(card.current.translation()))
                )
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                // Gán ảnh avatar cho mặt thẻ
                map={faceTexture}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial
          color="#000000"
          depthTest={false}
          resolution={new THREE.Vector2(2, 1)}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

export default function Band() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 13], fov: 25 }}
      dpr={[1, 1.5]}
      frameloop="demand"
    >
      <ambientLight intensity={Math.PI * 0.5} />
      <Physics gravity={[0, -40, 0]} timeStep={1 / 60}>
        <BandInner />
      </Physics>
      <Environment blur={0.75}>
        <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
      </Environment>
    </Canvas>
  );
}
