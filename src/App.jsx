import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import InstallPWA from './components/InstallPWA'

import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Counters from './sections/Counters'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import MapSection from './sections/MapSection'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Gallery />
        <Process />
        <Testimonials />
        <Counters />
        <Pricing />
        <Contact />
        <MapSection />
      </main>

      <Footer />
      <InstallPWA />
    </div>
  )
}
