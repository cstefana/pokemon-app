import { useQuery } from '@tanstack/react-query'
import { PokemonContext } from './PokemonContext'

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

async function fetchPokemon() {
  const response = await fetch(POKEMON_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon')
  }
  return response.json()
}

export function PokemonProvider({ children }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', { limit: 10, offset: 0 }],
    queryFn: fetchPokemon,
  })

  const pokemon = data?.results ?? []
  const errorMessage = error ? error.message : null

  return (
    <PokemonContext.Provider value={{ pokemon, loading: isLoading, error: errorMessage }}>
      {children}
    </PokemonContext.Provider>
  )
}