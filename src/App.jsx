import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import IntroducingSleepeez from './components/IntroducingSleepeez'
import HowItWorks from './components/HowItWorks'
import WhyChooseSleepeez from './components/WhyChooseSleepeez'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col overflow-hidden"
      >
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <ProblemSection />
          <IntroducingSleepeez />
          <HowItWorks />
          <WhyChooseSleepeez />
          <Testimonials />
          <FinalCTA />
        </main>
        <Footer />
      </motion.div>
    </Router>
  )
}

export default App