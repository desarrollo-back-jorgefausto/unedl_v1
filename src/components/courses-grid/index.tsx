
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import CoursesGridArea from './CoursesGridArea';
import QuiquebotWidget from '../chat';

const CoursesGrid = () => {
  return (
    <>
    <HeaderOne />
    <BreadcrumbCourses title="Licenciaturas" subtitle="Planes" />
    <CoursesGridArea /> 
    <FooterOne />      
    <QuiquebotWidget
              avatarSrc="assets/img/quique.png"
              rightOffset="1.5rem"  
              />
    </>
  );
};

export default CoursesGrid;