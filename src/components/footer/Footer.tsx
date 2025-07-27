import React from 'react';
import { Link } from 'react-router-dom';
import github from '@/assets/svgs/btn-github.svg';
import email from '@/assets/svgs/btn-email.svg';
import notion from '@/assets/svgs/btn-notion.svg';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="p-8 text-sm text-white c-footer bg-ourDarkGray sm:p-12 sm:text-base">
        <div className="mx-auto max-w-[1140px] sm:p-4">
          <ul className="pb-8 pl-1">
            <li className="mb-3 font-bold">서비스</li>
            <li className="py-2">
              <a
                className="py-2 pr-4 text-ourTextLightGray hover:brightness-80"
                href="#introduce"
              >
                소개
              </a>
            </li>

            <li className="py-2">
              <Link
                className="py-2 pr-4 text-ourTextLightGray hover:brightness-80"
                to={'/start'}
              >
                시작하기
              </Link>
            </li>
            <li className="py-2">
              <Link
                className="py-2 pr-4 text-ourTextLightGray hover:brightness-80"
                to={'/download'}
              >
                다운로드
              </Link>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li className="w-12 h-12">
              <Link to={'https://github.com/righthunkwon'} target="_blank">
                <img
                  className="hover:brightness-90"
                  src={github}
                  alt="github"
                />
              </Link>
            </li>
            <li className="w-12 h-12">
              <Link
                to={
                  'https://www.notion.so/righthun/dd055ee9f54445e89cd84d755071f7bd'
                }
                target="_blank"
              >
                <img
                  className="p-1 hover:brightness-90"
                  src={notion}
                  alt="notion"
                />
              </Link>
            </li>
            <li className="w-12 h-12">
              <Link to={'mailto:dhtmxk8134@naver.com'}>
                <img className="hover:brightness-90" src={email} alt="email" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
