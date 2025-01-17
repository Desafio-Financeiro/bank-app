import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "bankAppHost",
        remotes: {
          transactionsApp: `transactionsApp@${process.env.NEXT_PUBLIC_TRANSACTIONS_APP_URL}/remoteEntry.js`,
          reportsApp: `reportsApp@${process.env.NEXT_PUBLIC_REPORTS_APP_URL}/remoteEntry.js`,
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
