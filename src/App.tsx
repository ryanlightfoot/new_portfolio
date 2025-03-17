import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import FunPortfolioPage from './components/fun_portfolio_page/fun_port_page'
import Hobbies from './components/hobbies_page/hobbie'
import Footer from './components/footer/footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FunPortfolioPage />} />
        <Route path="/fun_port_page" element={<FunPortfolioPage />} />
        <Route path="/hobbies_page" element={<Hobbies />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
