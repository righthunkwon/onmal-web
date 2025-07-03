import logo from '@/assets/images/logo.png';

function App() {
  return (
    <>
      <div className='app-container'>
        {/* 메뉴 */}
        <nav className='c-nav-bar flex justify-between text-sm'>
          <div className='flex'>
            <div className='my-auto mx-2 flex items-center  px-3 py-2 cursor-pointer'>
              <img className='mx-2 w-6 h-6' src={logo} alt='logo' /> {/* 로고 수정 필요 */}
              <span className='font-bold text-xl text-ourTextBlack'>온말</span>
            </div>
            <ul className='my-auto flex text-ourGray '>
              <li className='c-menu-item'>시작하기</li>
              <li className='c-menu-item'>다운로드</li>
              <li className='c-menu-item'>문의하기</li>
            </ul>
          </div>
          <div className='border-1 border-ourBlue bg-ourBlue text-white  my-auto mx-2 px-1.5 py-1  rounded-lg hover:brightness-110 cursor-pointer whitespace-nowrap'>
            한국어
          </div>

          {/* 아래 화살표 추가 */}
        </nav>

        {/* 중간메인 */}
        <main className='c-content bg-blue-200'>메인페이지</main>

        {/* 하단 */}
        <footer className='c-footer bg-yellow-200'>푸터</footer>
      </div>
    </>
  );
}

export default App;
