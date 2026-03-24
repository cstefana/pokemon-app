import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

export function PokemonDetail() {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', 'detail', id],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon details')
      }
      return response.json()
    },
    enabled: Boolean(id),
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <main>
      <h1>{data?.name}</h1>
      {data?.sprites?.front_default && (
        <img src={data.sprites.front_default} alt={data.name} />
      )}
      <p>Height: {data?.height}</p>
      <p>Weight: {data?.weight}</p>
      <p>
        Types: {data?.types?.map((item) => item.type.name).join(', ')}
      </p>
      <Link to="/">Back</Link>
    </main>
  )
}
