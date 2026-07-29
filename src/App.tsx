import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="page-atmosphere" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}

export default App
