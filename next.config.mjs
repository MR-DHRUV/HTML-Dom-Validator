/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, { isServer }) => {
        // Disable browser fs only if it's not a server build
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                child_process: false,
                canvas:false,
            };
        }

        return config;
    },
};

export default nextConfig;