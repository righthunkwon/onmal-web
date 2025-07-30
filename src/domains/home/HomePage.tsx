import React from 'react';
import HomeIntroduce1 from '@/domains/home/components/HomeIntroduce1';
import HomeIntroduce2 from '@/domains/home/components/HomeIntroduce2';
import usePageTitle from '@/hooks/usePageTitle';

const HomePage: React.FC = () => {
  usePageTitle('온말');

  return (
    <>
      <HomeIntroduce1 />
      <HomeIntroduce2 />
    </>
  );
};

export default HomePage;
