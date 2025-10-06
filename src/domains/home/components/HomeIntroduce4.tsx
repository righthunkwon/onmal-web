import React from 'react';
import { Link } from 'react-router-dom';

const HomeIntroduce4: React.FC = () => {
  return (
    <>
      <section className="min-h-[calc(50vh)] bg-black py-16 text-white sm:min-h-[calc(100vh)] sm:py-20">
        <div className="c-content justify-center gap-8 p-4 lg:flex">
          <div className="mb-8 pl-8 text-3xl leading-normal font-semibold sm:mr-12 sm:pl-14 sm:text-6xl sm:leading-tight lg:pl-0">
            <span className="block">개발자를 위한</span>
            <span className="block">바로 적용하는 컨벤션,</span>
            <span className="text-ourBlue block">온말</span>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="rounded-lg bg-neutral-950 px-8 py-12 sm:px-16">
              <div className="mb-2 text-2xl font-bold">온말 표준데이터</div>
              <div className="text-ourTextGray mb-6 font-semibold">
                <div>
                  <Link
                    to={
                      'https://www.data.go.kr/bbs/rcr/selectRecsroomList.do?pageIndex=1&originId=&atchFileId=&searchCondition3=&searchCondition2=2&cndCtgryLaword=N&cndCtgryEdc=N&cndCtgryBigdata=N&cndCtgryStd=Y&cndCtgryNews=N&cndCtgryContest=&cndCtgryEtc=N&cndCtgryCardNews=&bindCndCtgry=PDTY04&sort-post=2&searchKeyword1=&Std=PDTY04'
                    }
                    className="underline"
                    target="_blank"
                  >
                    공공데이터포털
                  </Link>
                  <span>에 근거하여 신뢰할 수 있는 표준을 제시합니다.</span>
                </div>
                <div>
                  온말에서 제공하는 표준 단어, 속성, 주제, 엔터티를 통해 개발
                  효율성을 높여보세요.
                </div>
              </div>
              <div>
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
              <div className="mb-2 text-2xl font-bold">
                온말 다국어 (준비 중)
              </div>
              <div className="text-ourTextGray mb-6 font-semibold">
                <div>단순 번역기로는 만족스럽지 않은 당신을 위해,</div>
                <div>
                  온말에서 UI에 따른 네 가지 유형을 바탕으로 정확한 다국어 적용
                  가이드를 제시합니다.
                </div>
              </div>
              <div>
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
