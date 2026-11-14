import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./components/nav.jsx"
import Home from "./pages/Home.jsx"
import Search from "./pages/Search.jsx"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App;