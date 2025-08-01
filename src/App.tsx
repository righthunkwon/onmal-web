import { Route, Routes } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import HomePage from '@/domains/home/HomePage';
import StartDataPage from '@/domains/start-data/StartDataPage';
import StartI18nPage from '@/domains/start-i18n/StartI18nPage';
import DownloadPage from '@/domains/download/DownloadPage';
import NotFoundPage from '@/domains/not-found/NotFoundPage';
import SupportPage from '@/domains/support/SupportPage';
import NoticePage from '@/domains/notice/NoticePage';

const App = () => {
  return (
    <>
      <Header />
      <main className="c-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/start-data" element={<StartDataPage />} />
          <Route path="/start-i18n" element={<StartI18nPage />} />
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
