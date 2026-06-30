import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-tk-black min-h-screen">
      <Nav />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}