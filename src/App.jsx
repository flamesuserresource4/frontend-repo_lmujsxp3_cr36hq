import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import Process from './components/Process'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
