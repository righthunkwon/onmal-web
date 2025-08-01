import React from 'react';
import down from '@/assets/svgs/btn-angle-down.svg';

const HomeIntroduce3: React.FC = () => {
  /**
   * 부드러운 스크롤 이동을 구현한 함수
   */
  const handleClickMoveDown = () => {
    const start = window.scrollY; // 현재 스크롤 위치
    const startTime = performance.now(); // 시작시간
    const distance = window.innerHeight * 3 - 60 - start; // 뷰포트 - 헤더 - 현재스크롤위치
    const duration = 1000; // 스크롤 이동시간

    /**
     * requestAnimationFrame에 전달하는 함수
     * @param now : 현재시간(디폴트 매개변수)
     */
    const animate = (now: number) => {
      const elapsed = now - startTime; // 애니메이션 시작 후 경과시간
      const progress = Math.min(elapsed / duration, 1); // 애니메이션 진행률(0~1)
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // ease-in-out: 처음과 끝은 느리고 중간은 빠른 S자 곡선
      window.scrollTo(0, start + distance * easeInOut); // 스크롤 이동(가로, 세로)

      // 애니메이션이 끝나지 않았을 경우 프레임마다(60fps) 스크롤 이동
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // 애니메이션 시작
    requestAnimationFrame(animate);
  };

  return (
    <>
      <section className="bg-ourBlue flex min-h-[calc(50vh)] flex-col items-center justify-between py-16 pt-32 sm:min-h-[calc(100vh)] sm:pt-48">
        <div className="mx-auto flex-1 text-center">
          <div className="my-8 px-12 text-xl leading-normal font-semibold text-white sm:my-12 sm:text-3xl sm:leading-tight">
            <span className="block">어려운 다국어 처리, </span>
            <span className="block sm:py-2">
              메뉴, 버튼, 라벨, 메시지별로 쉽게.
            </span>
          </div>
        </div>
        <div className="animate-bounce-small mx-auto hidden sm:block">
          <button
            className="hover:cursor-pointer"
            onClick={handleClickMoveDown}
          >
            <img className="h-24 w-24" src={down} alt="down" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce3;
