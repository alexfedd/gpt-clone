export function getCookieByName(name) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    if (parts[0] === name) {
      return parts[1];
    }
  }
  return '{}';
}
