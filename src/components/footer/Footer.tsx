import React from 'react';
import github from '@/assets/svgs/btn-github.svg';
import email from '@/assets/svgs/btn-email.svg';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="c-footer bg-ourDarkGray p-8 text-sm text-white sm:p-12 sm:text-base">
        <div className="mx-auto max-w-[1140px] sm:p-4">
          <ul className="pb-8 pl-1">
            <li className="mb-3 font-bold">서비스</li>
            <li className="py-2">
              <a
                className="text-ourTextLightGray py-2 pr-4 hover:brightness-80"
                href="#introduce"
              >
                소개
              </a>
            </li>

            <li className="py-2">
              <a
                className="text-ourTextLightGray py-2 pr-4 hover:brightness-80"
                href="#시작하기페이지로이동"
              >
                시작하기
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-ourTextLightGray py-2 pr-4 hover:brightness-80"
                href="#다운로드페이지로이동"
              >
                다운로드
              </a>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li className="h-12 w-12">
              <a href="https://github.com/righthunkwon" target="_blank">
                <img
                  className="hover:brightness-90"
                  src={github}
                  alt="github"
                />
              </a>
            </li>
            <li className="h-12 w-12">
              <a href="mailto:dhtmxk8134@naver.com">
                <img className="hover:brightness-90" src={email} alt="email" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
