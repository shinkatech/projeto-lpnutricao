import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileDock from './components/MobileDock'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Methodology from './sections/Methodology'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Methodology />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileDock />
    </div>
  )
}
