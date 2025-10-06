import PagePaddingWrapper from '@/components/common/PagePaddingWrapper';
import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';

const DownloadPage: React.FC = () => {
  usePageTitle('다운로드 | 온말');

  return (
    <>
      <PagePaddingWrapper />
      <section className="mx-auto text-center">
        <div className="mb-8 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          다운로드 페이지
        </div>
        <div>
          <div>최신 버전 다운로드</div>
          <div>최신 버전에 대한 업데이트 내용</div>
          <div>1. 이전 다운로드 버전 및 설명</div>
          <div>2. 버전별 다운로드 파일</div>
          <div>3. 버전별 특징</div>
        </div>
      </section>
    </>
  );
};

export default DownloadPage;
