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
              <div className="text-ourTextGray mb-6 text-lg font-semibold">
                <div>온말 표준데이터</div>
                <div>온말 표준데이터에 대한 상세 설명입니다.</div>
              </div>
              <div className="text-lg">
                <Link
                  to={'/start-data'}
                  className="text-ourBlue my-auto hover:cursor-pointer hover:underline"
                >
                  자세히 알아보기
                </Link>
                <span className="text-ourBlue px-1 py-2 hover:cursor-default">
                  {'>'}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-neutral-950 px-8 py-12 sm:px-16">
              <div className="mb-1 text-2xl font-bold">온말 다국어</div>
              <div className="text-ourTextGray mb-6 text-lg font-semibold">
                <div>온말 다국어에 대한 설명입니다.</div>
                <div>온말 다국어에 대한 상세 설명입니다.</div>
              </div>
              <div className="text-lg">
                <Link
                  to={'/start-i18n'}
                  className="text-ourBlue hover:cursor-pointer hover:underline"
                >
                  자세히 알아보기
                </Link>
                <span className="text-ourBlue p-2 hover:cursor-default">
                  {'>'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce4;
