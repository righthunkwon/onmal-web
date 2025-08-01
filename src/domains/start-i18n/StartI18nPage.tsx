import PagePaddingWrapper from '@/components/common/PagePaddingWrapper';
import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';

const StartI18nPage: React.FC = () => {
  usePageTitle('시작하기 - 다국어 | 온말');

  return (
    <>
      <PagePaddingWrapper />
      <div className="mx-auto text-center">
        <div className="mb-8 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          {/* 
          데이터표준 참고 정리
          https://12bme.tistory.com/246 
          */}
          다국어 페이지
        </div>

        <div>
          <span>온말 서비스를 시작하는 방법 개발 문서처럼 설명하기</span>
        </div>
      </div>
    </>
  );
};

export default StartI18nPage;
