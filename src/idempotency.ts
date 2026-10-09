export function normalizeKey(key: string): string {
  return key.replace(/[\u200B-\u200D\u2060\uFEFF]/g, "").trim().toLowerCase();
}
