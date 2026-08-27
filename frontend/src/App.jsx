import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Music from './components/Music'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-tk-black min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}