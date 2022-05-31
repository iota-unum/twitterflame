// /** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// const nextConfig = {
//   reactStrictMode: true,
//   reactStrictMode: true,
//   images: {
//     domains: ['pbs.twimg.com', 'example2.com'],
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//         // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//         config.resolve.fallback = {
//             fs: false
//         }
//     }

//     return config;
// }
// }

// module.exports =(phase, nextConfig) => {
//   return withBundleAnalyzer(nextConfig)
// }








module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'example2.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false
        }
    }

    return config;
}
}