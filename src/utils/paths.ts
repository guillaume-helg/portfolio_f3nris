export const getAssetPath = (path: string) => {
    const isProd = process.env.NODE_ENV === "production";
    const isGithubActions = process.env.GITHUB_ACTIONS === "true";
    const isDev = process.env.NODE_ENV === "development";

    const shouldPrefix = (isProd || isGithubActions) && !isDev;
    const basePath = shouldPrefix ? "/portfolio_f3nris" : "";

    if (!path) return "";

    if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
        return path;
    }

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;

    if (basePath && normalizedPath.startsWith(basePath)) {
        return normalizedPath;
    }

    return `${basePath}${normalizedPath}`;
};
