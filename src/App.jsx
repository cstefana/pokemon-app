import { Route, Routes } from 'react-router-dom'
import { PokemonDetail } from './components/PokemonDetail'
import { PokemonList } from './components/PokemonList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  )
}

export default App
