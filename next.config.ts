import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "/portfolio_f3nris";

// On GitHub Actions, we ALWAYS want the basePath, even if NODE_ENV isn't "production" yet
const basePath = (isDev && !isGithubActions) ? "" : repoName;

console.log(`[NextConfig] isDev: ${isDev}, isGithubActions: ${isGithubActions}, basePath: "${basePath}"`);

const nextConfig: NextConfig = {
    output: "export",
    basePath: basePath,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
