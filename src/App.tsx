import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Home from '@/domains/home/Home';

const App = () => {
  return (
    <>
      <div className="c-container">
        {/* 헤더 */}
        <Header />

        {/* 메인 */}
        <main className="c-content bg-red-200">
          <Home />
        </main>

        {/* 푸터 */}
      </div>
      <Footer />
    </>
  );
};

export default App;
