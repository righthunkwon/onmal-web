import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  usePageTitle('페이지를 찾을 수 없습니다. | 온말');

  return (
    <>
      <div className="pb-12 sm:pb-32"></div>
      <div className="mx-auto text-center">
        <div className="mb-12 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          <span className="block sm:inline">페이지를 </span>
          <span className="block sm:inline">찾을 수 없습니다.</span>
        </div>

        <Link
          to={'/'}
          className="bg-ourBlue hover:bg-ourEventBlueDark rounded-lg px-4 py-2 text-white hover:cursor-pointer"
        >
          홈으로
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
