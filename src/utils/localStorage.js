export function saveData(data, key) {
  if (!window) return;
  window.localStorage.setItem(key, JSON.stringify(data));
}
