import React from 'react';
import usePageTitle from '@/hooks/usePageTitle';
import PagePaddingWrapper from '@/components/common/PagePaddingWrapper';

const SupportPage: React.FC = () => {
  usePageTitle('문의하기 | 온말');

  return (
    <>
      <PagePaddingWrapper />
      <div className="mx-auto text-center">
        <div className="mb-8 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          문의하기 페이지
        </div>

        <div>
          <div>사용자가 문의를 남기는 화면</div>
          <div>1. 문의 카테고리</div>
          <div>2. 문의 목록</div>
          <div>3. 문의 작성</div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
