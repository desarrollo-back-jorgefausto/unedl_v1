
import ShopGrid from '@/components/shop-grid';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Shop Grid - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <ShopGrid />
    </Wrapper>
  );
};

export default index;