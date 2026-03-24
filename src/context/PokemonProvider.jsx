import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PokemonContext } from './PokemonContext'

const PAGE_SIZE = 10

async function fetchPokemon({ limit, offset }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon')
  }
  return response.json()
}

export function PokemonProvider({ children }) {
  const [page, setPage] = useState(1)
  const offset = (page - 1) * PAGE_SIZE
  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', { limit: PAGE_SIZE, offset }],
    queryFn: () => fetchPokemon({ limit: PAGE_SIZE, offset }),
    keepPreviousData: true,
  })

  const pokemon = data?.results ?? []
  const totalCount = data?.count ?? 0
  const totalPages = Math.ceil(totalCount / PAGE_SIZE)
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1
  const errorMessage = error ? error.message : null

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        loading: isLoading,
        error: errorMessage,
        page,
        pageSize: PAGE_SIZE,
        totalCount,
        totalPages,
        hasNextPage,
        hasPrevPage,
        setPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}