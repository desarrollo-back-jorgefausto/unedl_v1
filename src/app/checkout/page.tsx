 
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Checkout from '@/components/checkout';



import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Universidad Enrique Díaz de León",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Checkout />
    </Wrapper>
  );
};

export default index;