/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: false,
    poweredByHeader: false,
    compiler: {
        removeConsole: {
            exclude: ['error', 'warn']
        }
    },
    experimental: {
        optimizePackageImports: ['react-icons', 'three', '@react-three/drei']
    },
    async headers() {
        return [
            {
                source: '/_next/static/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
                ]
            },
            {
                source: '/fonts/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
                ]
            }
        ]
    }
}

export default nextConfig


