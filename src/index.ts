const youid = (str?: string | null, length?: number) => {
  if (!str) return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).substring(0, length);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  let b36 = Math.abs(hash).toString(36);
  if (length) {
    b36 = b36.padEnd(length, '0');
    b36 = b36.slice(0, length);
  }
  return b36
}

export default youid