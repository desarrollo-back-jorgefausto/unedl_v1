
import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import CoursesDetails from '@/components/courses-details';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Universidad Enrique Díaz de León",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesDetails />      
    </Wrapper>
  );
};

export default index;