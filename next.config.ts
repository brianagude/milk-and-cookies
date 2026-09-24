import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
			{
				protocol: "https",
				hostname: "image.mux.com",
			},
		],
	},
	// Linting is handled by Biome (`pnpm lint`), so skip Next's ESLint step
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
