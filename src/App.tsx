import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { FeaturesPage } from './pages/FeaturesPage'
import { ContactPage } from './pages/ContactPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'features' | 'contact' | 'terms' | 'privacy'>('home')

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5] font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'features' && <FeaturesPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'terms' && <TermsPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
