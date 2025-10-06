import PagePaddingWrapper from '@/components/common/PagePaddingWrapper';
import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';

const StartI18nPage: React.FC = () => {
  usePageTitle('시작하기 - 다국어 | 온말');

  return (
    <>
      <PagePaddingWrapper />
      <section className="c-content relative mx-auto gap-16 px-8 sm:flex">
        <div className="flex-9">
          <h1 className="mb-8 text-2xl leading-tight font-semibold sm:mb-12 sm:text-4xl">
            온말 다국어 (준비 중)
          </h1>
          <div>
            <article className="pb-8">
              <h2
                id="overview"
                className="scroll-mt-24 py-2 text-lg font-semibold sm:text-2xl"
              >
                개요
              </h2>
              <p className="text-ourTextBlack text-justify">
                현재 해당 서비스는 준비 중입니다.
              </p>
            </article>
          </div>
          <PagePaddingWrapper />
        </div>

        <nav className="sticky top-24 hidden flex-2 self-start sm:block">
          <div className="text-ourBlue mb-3 text-sm font-semibold">
            이 페이지의 내용
          </div>
          <ul className="text-ourTextDarkGray space-y-2 text-sm underline">
            <li>
              <a href="#overview">개요</a>
            </li>
            <li>
              <a href="#">메뉴</a>
            </li>
            <li>
              <a href="#">버튼</a>
            </li>
            <li>
              <a href="#">라벨</a>
            </li>
            <li>
              <a href="#">메시지</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default StartI18nPage;
