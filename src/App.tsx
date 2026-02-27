import { useState } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { ChatPage } from './pages/ChatPage';
import { TrackerPage } from './pages/TrackerPage';
import { ExplorerPage } from './pages/ExplorerPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { TrustPage } from './pages/TrustPage';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [language, setLanguage] = useState('en');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'chat':
        return <ChatPage language={language} />;
      case 'tracker':
        return <TrackerPage />;
      case 'explorer':
        return <ExplorerPage />;
      case 'technology':
        return <TechnologyPage />;
      case 'trust':
        return <TrustPage />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      {renderPage()}
    </div>
  );
}

export default App;
