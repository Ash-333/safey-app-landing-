import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import SuggestionPage from './pages/SuggestionPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/suggestions" element={<SuggestionPage />} />
    </Routes>
  )
}
