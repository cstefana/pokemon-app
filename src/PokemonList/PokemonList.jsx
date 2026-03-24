import { Link } from 'react-router-dom'
import { usePokemon } from '../hooks/usePokemon'
import { getPokemonId } from '../utils/pokemon'
import './PokemonList.css'

export function PokemonList() {
  const {
    pokemon,
    loading,
    error,
    page,
    totalPages,
    hasNextPage,
    hasPrevPage,
    setPage,
  } = usePokemon()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <main className="page">
      <h1>Pokemon Finder</h1>
      <ul className="pokemon-grid">
        {pokemon.map((item) => {
          const id = getPokemonId(item.url)
          return (
            <li key={item.name} className="pokemon-card">
              <Link to={`/pokemon/${id}`} className="pokemon-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="pagination">
        <button type="button" onClick={() => setPage(page - 1)} disabled={!hasPrevPage}>
          Prev
        </button>
        <span className="page-count">
          Page {page} of {totalPages || 1}
        </span>
        <button type="button" onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </main>
  )
}