import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "bankAppHost",
        remotes: {
          transactionsApp:
            "transactionsApp@http://localhost:3002/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
        extraOptions: {},
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;
