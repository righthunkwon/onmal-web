import PagePaddingWrapper from '@/components/common/PagePaddingWrapper';
import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';

const NoticePage: React.FC = () => {
  usePageTitle('공지사항 | 온말');

  return (
    <>
      <PagePaddingWrapper />
      <section className="mx-auto text-center">
        <div className="mb-8 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          공지사항 페이지
        </div>
        <div>
          <span>개발자 공지사항</span>
          <span>공공데이터셋 업데이트 공지</span>
          {/* https://www.data.go.kr/bbs/rcr/selectRecsroomList.do?pageIndex=1&originId=&atchFileId=&searchCondition3=&searchCondition2=2&cndCtgryLaword=N&cndCtgryEdc=N&cndCtgryBigdata=N&cndCtgryStd=Y&cndCtgryNews=N&cndCtgryContest=&cndCtgryEtc=N&cndCtgryCardNews=&bindCndCtgry=PDTY04&sort-post=2&searchKeyword1=&Std=PDTY04 */}
        </div>
      </section>
    </>
  );
};

export default NoticePage;
