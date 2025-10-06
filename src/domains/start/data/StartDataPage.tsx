import PagePaddingWrapper from '@/components/common/PagePaddingWrapper';
import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';
import img1 from '@/assets/images/start/data/start-data-page-001.png';

const StartDataPage: React.FC = () => {
  usePageTitle('시작하기 - 표준데이터 | 온말');

  return (
    <>
      <PagePaddingWrapper />
      <section className="c-content relative mx-auto gap-16 px-8 sm:flex">
        <div className="flex-9">
          <h1 className="mb-8 text-2xl leading-tight font-semibold sm:mb-12 sm:text-4xl">
            온말 표준데이터
          </h1>
          <div>
            <article className="pb-8">
              <h2
                id="overview"
                className="scroll-mt-24 text-lg font-semibold sm:text-2xl"
              >
                개요
              </h2>
              <p className="text-ourTextBlack my-6 text-justify leading-relaxed">
                데이터 표준이 있으면 개발 생산성이 올라갑니다. 가령, '직원 급여
                입금 계좌번호'를 저장하는 컬럼을 만들어야 한다고 가정해봅시다.
                단어를 분리해서 영어로 번역하면 직원은 Employee, 급여는 Salary,
                입금은 Deposit, 계좌번호는 Account number입니다. 단순히 이를
                이어붙여 컬럼명을 작성할 경우 컬럼명이 너무 길어져 정상적으로
                개발을 할 수 없게 됩니다. 약어를 활용하여 직원을 EMP, 급여를
                SAL, 입금을 DPST, 계좌번호를 ACNO 로 할 경우에는 컬럼명이
                'EMP_SAL_DPST_ACNO' 로 현실적이면서도 명확합니다. 그런데 문제가
                발생했습니다. 기존에 급여 정보가 SAL가 아닌 WAGE로 정의되어
                있어서 어떤 급여는 SAL이고, 어떤 급여는 WAGE입니다.
              </p>
              <p className="text-ourTextBlack my-6 text-justify leading-relaxed">
                어쩌면 이 문제 하나는 사소할 수 있습니다. 하지만 가장 큰 문제는
                이러한 문제가 매우 빈번하게 발생한다는 점입니다. 그리고 누적될
                경우 수정하기 어렵다는 것입니다. 테이블을 만들 때마다, 컬럼을
                추가할 때마다, 쿼리를 작성할 때마다 표준 단어가 없다면 매번
                고민하는 과정을 거치게 됩니다. 고민 끝에 이름을 짓더라도 기존
                데이터와 충돌이 날 수 있고 만약 이것이 늦게 인지된다면
                수정하기도 어렵습니다. 데이터 표준이 있다면 이러한 문제는 쉽게
                해결됩니다. 필요한 속성이 있다면 그냥 기존의 단어를 찾아 조합만
                하면 됩니다. 개발의 생산성은 물론, 정확성까지 높일 수 있습니다.
              </p>
              <img
                src={img1}
                className="px-8 py-4 sm:px-12 md:px-20 lg:px-32 lg:py-8"
                alt="온말 표준데이터 개요 이미지 1"
              />
              <p className="text-ourTextBlack my-6 text-justify leading-relaxed">
                온말은 이러한 고민을 해결하고자, 여러 표준을 제시합니다. 단어,
                속성, 주제, 엔터티를 바탕으로 테이블명과 컬럼명을
              </p>
            </article>

            <article className="pb-8">
              <h2
                id="table-name"
                className="scroll-mt-24 py-2 text-lg font-semibold sm:text-2xl"
              >
                테이블명
              </h2>
              <p className="text-ourTextBlack text-justify leading-relaxed">
                포스팅 더하기 주제영역 + 테이블명 + 엔터티 유형명
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
              <a href="#table-name">테이블명</a>
            </li>
            <li>
              <a href="#column-name">컬럼명</a>
            </li>
            <li>
              <a href="#procedure-name">프로시저명</a>
            </li>
            <li>
              <a href="#function-name">함수명</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default StartDataPage;
