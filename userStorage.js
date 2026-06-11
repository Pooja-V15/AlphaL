export function getCurrentUserStorageId() {
  try {
    const user = JSON.parse(localStorage.getItem("nexora_current_user") || "null");
    const identifier = user?.email || user?.phone || user?.id || "guest";
    return String(identifier)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || "guest";
  } catch {
    return "guest";
  }
}

export function getUserStorageKey(baseKey) {
  return `${baseKey}-${getCurrentUserStorageId()}`;
}
