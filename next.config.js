/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com',],
    },



    async headers() {
        return [
            {
                source: '/booking', // Adjust the path as needed
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store', // Will not cache this page
                    },
                ],
            },
        ];
    },

}

module.exports = nextConfig
