import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import QuiquebotWidget from '@/components/chat';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "About - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <QuiquebotWidget />
    </Wrapper>
  );
};

export default index;