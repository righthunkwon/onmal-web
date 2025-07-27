import React from 'react';
import { Link } from 'react-router-dom';
import down from '@/assets/svgs/btn-angle-down.svg';

const HomeIntroduce1: React.FC = () => {
  const handleClickDownload = () => {
    alert('다운로드');
  };

  const handleClickMoveDown = () => {
    const distance = window.innerHeight - 60;
    const duration = 1000;
    const startY = window.scrollY;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <>
      <section className="flex min-h-[calc(100vh-60px)] flex-col justify-between pt-16 sm:pt-24">
        <div className="animate-fade-in mx-auto flex-1 text-center">
          <div className="mb-8 text-3xl leading-normal font-semibold sm:mb-12 sm:text-6xl sm:leading-tight">
            <span className="block">바로 적용하는 다국어</span>
            <span className="block sm:inline">온말에서 </span>
            <span className="sm:inline">쉽고 간편하게</span>
          </div>

          <div className="flex justify-center gap-2 sm:text-xl">
            {/* 최신버전 다운로드 */}
            <button
              onClick={handleClickDownload}
              className="bg-ourBlue hover:bg-ourEventBlueDark rounded-lg px-4 py-2 text-white hover:cursor-pointer"
            >
              다운로드
            </button>
            {/* 시작하기 페이지로 이동 */}
            <Link
              to={'/start'}
              className="text-ourTextBlue border-ourGray hover:text-ourEventBlueDark rounded-lg border-1 px-4 py-2 hover:cursor-pointer hover:border-black"
            >
              살펴보기
            </Link>
          </div>
        </div>
        <div className="animate-bounce-small mx-auto">
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

export default HomeIntroduce1;
