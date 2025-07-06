import Header from '@/components/Header';

const App = () => {
  return (
    <>
      <div className="c-container">
        <Header />

        {/* 메인컨텐츠 */}
        <main className="c-content bg-blue-200">
          <span>바로 적용하는 다국어</span>
          기능 1 다국어 적용 가이드 제공 2 추천 번역 제공 3 컴포넌트 복붙 시
          한국어 텍스트파일만 감지해서 추천 번역 제공
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            sapiente odit doloremque voluptas totam aliquam, fugit temporibus
            nihil, voluptatibus fugiat, laudantium explicabo eaque minima
          </span>
        </main>

        {/* 하단푸터 */}
        <footer className="c-footer bg-gray-50">
          <ul>
            <li>
              <div>서비스</div>
            </li>
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">문의</a>
            </li>
            <li>
              <a href="#">소스코드</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default App;
