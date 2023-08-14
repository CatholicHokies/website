/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true }, // This is a temporary fix for the image issue
}

module.exports = nextConfig
