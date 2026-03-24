import { usePokemon } from './hooks/usePokemon'

function App() {
  const { pokemon, loading, error } = usePokemon()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <main>
      <h1>Pokemon</h1>
      <ul>
        {pokemon.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
