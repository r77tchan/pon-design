const normalizeBasePath = (value: string) => {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (!trimmed || trimmed === "/") return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

export const assetPath = (path: string) => {
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
