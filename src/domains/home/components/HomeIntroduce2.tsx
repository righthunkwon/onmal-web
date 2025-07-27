import React from 'react';

const HomeIntroduce2: React.FC = () => {
  return (
    <>
      <section className="bg-ourBlue flex min-h-[calc(100vh-60px)] flex-col justify-between pt-16 sm:pt-24">
        <div className="animate-fade-in mx-auto flex-1 text-center">
          <div className="mb-8 text-3xl leading-normal font-semibold sm:mb-12 sm:text-6xl sm:leading-tight">
            <span className="block">두 번째 소개 페이지</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce2;
