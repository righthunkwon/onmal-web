import React from 'react';
import { Link } from 'react-router-dom';

const HomeIntroduce4: React.FC = () => {
  return (
    <>
      <section className="min-h-[calc(50vh)] bg-black py-16 text-white sm:min-h-[calc(100vh)] sm:py-20">
        <div className="c-content justify-center gap-8 p-4 lg:flex">
          <div className="mb-8 pl-8 text-3xl leading-normal font-semibold sm:mr-12 sm:text-6xl sm:leading-tight lg:pl-0">
            <span className="block">개발자를 위한</span>
            <span className="block">바로 적용하는 컨벤션,</span>
            <span className="text-ourBlue block">온말</span>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="rounded-lg bg-neutral-950 px-8 py-12 sm:px-16">
              <div className="mb-1 text-2xl font-bold">온말 표준데이터</div>
              <div className="text-ourTextLightGray mb-8 text-lg font-semibold">
                <div>온말 표준데이터에 대한 설명입니다.</div>
                <div>온말 표준데이터에 대한 상세 설명입니다.</div>
              </div>
              <Link
                to={'/start-data'}
                className="bg-ourBlue hover:bg-ourEventBlueDark rounded-lg px-4 py-2 text-white hover:cursor-pointer"
              >
                자세히 알아보기
              </Link>
            </div>

            <div className="rounded-lg bg-neutral-950 px-8 py-12 sm:px-16">
              <div className="mb-1 text-2xl font-bold">온말 다국어</div>
              <div className="text-ourTextLightGray mb-8 text-lg font-semibold">
                <div>온말 다국어에 대한 설명입니다.</div>
                <div>온말 다국어에 대한 상세 설명입니다.</div>
              </div>
              <Link
                to={'/start-i18n'}
                className="bg-ourBlue hover:bg-ourEventBlueDark rounded-lg px-4 py-2 text-white hover:cursor-pointer"
              >
                자세히 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce4;
