import { Link } from 'react-router-dom'
import { usePokemon } from '../hooks/usePokemon'
import { getPokemonId } from '../utils/pokemon'

export function PokemonList() {
  const { pokemon, loading, error } = usePokemon()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <main>
      <h1>Pokemon</h1>
      <ul>
        {pokemon.map((item) => {
          const id = getPokemonId(item.url)
          return (
            <li key={item.name}>
              <Link to={`/pokemon/${id}`}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}