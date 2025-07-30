import React from 'react';

const HomeIntroduce2: React.FC = () => {
  return (
    <>
      <section className="bg-ourBlue flex min-h-[calc(100vh-60px)] flex-col justify-between pt-16 sm:pt-24">
        <div className="animate-fade-in mx-auto flex-1 text-center">
          <div className="mb-8 text-xl leading-normal font-semibold text-white sm:mb-12 sm:text-3xl sm:leading-tight">
            <span className="c-content block p-32">
              내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요. 이제껏
              경험 못 했던 쉽고 편리한 금융 서비스, 토스와 함께라면 당신의
              일상이 새로워질 거예요.
            </span>
            <span>서비스1</span>
            <span>서비스2</span>
            <span>서비스3</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce2;
