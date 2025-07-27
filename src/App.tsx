import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import HomePage from '@/domains/home/HomePage';
import StartPage from '@/domains/start/StartPage';
import DownloadPage from '@/domains/download/DownloadPage';
import NotFoundPage from '@/domains/not-found/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="c-container">
        {/* 헤더 */}
        <Header />

        {/* 메인 */}
        <main className="c-content c-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/download/:version" element={<DownloadPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      {/* 푸터 */}
      <Footer />
    </>
  );
};

export default App;
