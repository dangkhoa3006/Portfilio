/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: {
            exclude: ['error', 'warn']
        }
    },
    experimental: {
        optimizePackageImports: ['react-icons', 'three', '@react-three/drei']
    }
}

export default nextConfig


