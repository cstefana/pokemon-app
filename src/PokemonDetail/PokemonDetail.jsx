import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import './PokemonDetail.css'

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
    <main className="page detail-page">
      <div className="detail-card">
        <div className="detail-header">
          <h1>{data?.name}</h1>
          <Link to="/" className="detail-back">
            Back
          </Link>
        </div>
        {data?.sprites?.front_default && (
          <img
            className="detail-image"
            src={data.sprites.front_default}
            alt={data.name}
          />
        )}
        <div className="detail-meta">
          <div>
            <span className="detail-label">Height</span>
            <span>{data?.height}</span>
          </div>
          <div>
            <span className="detail-label">Weight</span>
            <span>{data?.weight}</span>
          </div>
          <div>
            <span className="detail-label">Types</span>
            <span className="detail-types">
              {data?.types?.map((item) => item.type.name).join(', ')}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
