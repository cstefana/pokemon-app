import { Route, Routes } from 'react-router-dom'
import { PokemonDetail } from './PokemonDetail/PokemonDetail'
import { PokemonList } from './PokemonList/PokemonList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  )
}

export default App
