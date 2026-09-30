import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Features from '../components/Features'
import SOSDeepDive from '../components/SOSDeepDive'
import DualView from '../components/DualView'
import PrivacySection from '../components/PrivacySection'
import LearningWellness from '../components/LearningWellness'
import SafeSpaceSupport from '../components/SafeSpaceSupport'
import BuiltForNepal from '../components/BuiltForNepal'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <SOSDeepDive />
      <DualView />
      <PrivacySection />
      <LearningWellness />
      <SafeSpaceSupport />
      <BuiltForNepal />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
