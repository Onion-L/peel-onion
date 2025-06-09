export default function getPkgManager() {
  const userAgent = process.env.npm_config_user_agent;
  const isYarn = userAgent?.includes("yarn");
  const isNpm = userAgent?.includes("npm");
  const isPnpm = userAgent?.includes("pnpm");
  const isBun = userAgent?.includes("bun");

  const packageManager = isYarn
    ? "yarn"
    : isNpm
      ? "npm"
      : isPnpm
        ? "pnpm"
        : isBun
          ? "bun"
          : "unknown";

  return packageManager;
}
