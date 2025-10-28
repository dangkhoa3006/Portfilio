'use client';

import * as THREE from 'three';
import { useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
  RenderTexture,
  Text
} from '@react-three/drei';
import {
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  BallCollider,
  CuboidCollider
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

// preload asset
useGLTF.preload(
  'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb'
);
useTexture.preload(
  'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg'
);

type Badge3DProps = {
  fullName?: string;
  jobTitle?: string;
  userImageUrl?: string;
};

function Band({
  fullName = 'Đăng Khoa',
  jobTitle = 'Full Stack Developer',
  userImageUrl = '/image/avt.jpg'
}: Badge3DProps) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const { size } = useThree();

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3()
      ])
  );
  const [dragged, setDragged] = useState<false | THREE.Vector3>(false);

  // load model + textures
  const { nodes, materials } = useGLTF(
    'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb'
  ) as unknown as { nodes: any; materials: any };

  const strapTexture = useTexture(
    'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg'
  );
  strapTexture.wrapS = strapTexture.wrapT = THREE.RepeatWrapping;

  const avatarTexture = useTexture(userImageUrl);
  // @ts-ignore
  avatarTexture.colorSpace = THREE.SRGBColorSpace;
  avatarTexture.anisotropy = 8;

  const coverSize = useMemo(() => {
    // Ảnh chiếm phần lớn diện tích, căn giữa
    const maxWidth = 1.6;
    const maxHeight = 1.2;
    const img = (avatarTexture as any).image as {
      width?: number;
      height?: number;
    };
    const iw = img?.width || 1;
    const ih = img?.height || 1;
    const aspect = iw / ih;
    const boxAspect = maxWidth / maxHeight;
    return boxAspect > aspect
      ? { w: maxHeight * aspect, h: maxHeight }
      : { w: maxWidth, h: maxWidth / aspect };
  }, [avatarTexture]);

  // lấy uv từ model để canh overlay
  const { uvPos, uvScale } = useMemo(() => {
    const uvAttr = (nodes as any).card.geometry.attributes?.uv;
    if (!uvAttr)
      return {
        uvPos: new THREE.Vector3(0, 0, 0),
        uvScale: new THREE.Vector3(2, 2, 1)
      };

    let minU = 1,
      maxU = 0,
      minV = 1,
      maxV = 0;
    for (let i = 0; i < uvAttr.count; i++) {
      const u = uvAttr.getX(i);
      const v = uvAttr.getY(i);
      if (u < minU) minU = u;
      if (u > maxU) maxU = u;
      if (v < minV) minV = v;
      if (v > maxV) maxV = v;
    }
    const centerU = (minU + maxU) / 2;
    const centerV = (minV + maxV) / 2;
    const widthU = maxU - minU;
    const heightV = maxV - minV;
    const posX = (centerU - 0.5) * 2;
    const posY = (centerV - 0.5) * 2;
    return {
      uvPos: new THREE.Vector3(posX, posY, 0),
      uvScale: new THREE.Vector3(widthU, heightV, 1)
    };
  }, [nodes]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }

    if (fixed.current && band.current) {
      [j1, j2].forEach((ref: any) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clamped = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          (state.clock.getDelta() || 0.016) * (10 + clamped * (50 - 10))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      (curve as any).curveType = 'chordal';
      band.current.geometry.setPoints(curve.getPoints(32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({
        x: ang.x,
        y: ang.y - rot.y * 0.25,
        z: ang.z
      });
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" canSleep colliders={false} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
          angularDamping={2}
          linearDamping={2}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          {/* Card model + render texture */}
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              setDragged(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              setDragged(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            <mesh geometry={(nodes as any).card.geometry}>
              <meshPhysicalMaterial
                clearcoat={1}
                clearcoatRoughness={0.1}
                roughness={0.3}
                metalness={0.5}
              >
                <RenderTexture attach="map">
                  {/* Nền đen full */}
                  <mesh>
                    <planeGeometry args={[2, 2]} />
                    <meshBasicMaterial color="black" />
                  </mesh>

                  {/* Nội dung badge */}
                  {/* Xoay nội dung để khớp UV của model thay vì xoay texture trực tiếp */}
                  <group position={[0, 0, 0.01]} scale={[1.3, 1.3, 1]} rotation={[0, 0, Math.PI / 2]}>
                    {/* Header: ngày hoặc tagline (bạn có thể chỉnh tùy ý) */}
                    <Text
                      position={[0.8, 0.85, 0]}
                      fontSize={0.06}
                      color="#d4d4d8"
                      anchorX="right"
                      anchorY="middle"
                    >
                      PORTFOLIO 2025
                    </Text>

                    {/* Tên lớn ở giữa */}
                    <Text
                      position={[0, 0.4, 0]}
                      fontSize={0.22}
                      color="white"
                      anchorX="center"
                      anchorY="middle"
                    >
                      {fullName.toUpperCase()}
                    </Text>

                    {/* Nghề nghiệp */}
                    <Text
                      position={[0, 0.2, 0]}
                      fontSize={0.1}
                      color="#a1a1aa"
                      anchorX="center"
                      anchorY="middle"
                    >
                      {jobTitle.toUpperCase()}
                    </Text>

                    {/* Ảnh đại diện (tự động scale vừa khung) */}
                    <mesh position={[0, -0.15, 0]}>
                      <planeGeometry args={[0.5, 0.5]} />
                      <meshBasicMaterial
                        map={avatarTexture as any}
                        toneMapped={false}
                        transparent
                      />
                    </mesh>

                    {/* Dòng chức danh chính */}
                    <Text
                      position={[0, -0.6, 0]}
                      fontSize={0.085}
                      color="#ffffff"
                      anchorX="center"
                      anchorY="middle"
                    >
                      FRONT END DEVELOPER
                    </Text>
                  </group>
                </RenderTexture>


              </meshPhysicalMaterial>
            </mesh>

            <mesh
              geometry={(nodes as any).clip.geometry}
              material={(materials as any).metal}
              material-roughness={0.3}
            />
            <mesh
              geometry={(nodes as any).clamp.geometry}
              material={(materials as any).metal}
            />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[size.width, size.height] as any}
          useMap
          map={strapTexture as any}
          repeat={[-3, 1] as any}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

export default function Badge3D({
  fullName = 'Khoa Dang',
  jobTitle = 'Full Stack Developer',
  userImageUrl = '/image/avt.jpg'
}: Badge3DProps) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 13], fov: 25 }}
      dpr={[1, 1.5]}
      frameloop="always"
    >
      <ambientLight intensity={Math.PI * 0.5} />
      <Physics gravity={[0, -20, 0]} timeStep={1 / 60}>
        <Band
          fullName={fullName}
          jobTitle={jobTitle}
          userImageUrl={userImageUrl}
        />
      </Physics>

      {/* Environment ánh sáng 3D */}
      <Environment blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer intensity={6} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
      </Environment>
    </Canvas>
  );
}
