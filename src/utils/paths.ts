export const getAssetPath = (path: string) => {
    // If we are on GitHub Actions or environment is production, we need the prefix
    const isProd = process.env.NODE_ENV === "production";
    const isGithubActions = process.env.GITHUB_ACTIONS === "true";
    const isDev = process.env.NODE_ENV === "development";

    // Default to prefixing if NOT in dev OR if in GitHub Actions
    const shouldPrefix = (isProd || isGithubActions) && !isDev;
    const basePath = shouldPrefix ? "/portfolio_f3nris" : "";

    if (!path) return "";

    if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
        return path;
    }

    // Ensure path starts with /
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;

    // Avoid double prefixing if path already starts with basePath
    if (basePath && normalizedPath.startsWith(basePath)) {
        return normalizedPath;
    }

    return `${basePath}${normalizedPath}`;
};
