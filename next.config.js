/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ENV: process.env.NEXT_PUBLIC_ENV,
    },
}

module.exports = nextConfig
