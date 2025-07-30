import { Route, Routes } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import HomePage from '@/domains/home/HomePage';
import StartPage from '@/domains/start/StartPage';
import DownloadPage from '@/domains/download/DownloadPage';
import NotFoundPage from '@/domains/not-found/NotFoundPage';
import SupportPage from './domains/support/SupportPage';

const App = () => {
  return (
    <>
      <Header />
      <main className="c-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/download/:version" element={<DownloadPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
