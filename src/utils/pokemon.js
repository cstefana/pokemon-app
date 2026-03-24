export function getPokemonId(url) {
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}
