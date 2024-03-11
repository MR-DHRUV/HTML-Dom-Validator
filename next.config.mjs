/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, { isServer }) => {
        // Disable browser fs only if it's not a server build
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                ChildProcess: false,
                child_process: false,
            };
        }

        return config;
    },
};

export default nextConfig;