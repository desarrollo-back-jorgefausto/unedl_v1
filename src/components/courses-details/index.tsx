import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CoursesDetailsArea from './CoursesDetailsArea';
import RelatedCourses from './RelatedCourses';
import QuiquebotWidget from '../chat';

const CoursesDetails = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbCoursesDetails />
      <CoursesDetailsArea />
      <RelatedCourses />
      <MarqueeOne style_2={true} />
      <FooterOne />
      <QuiquebotWidget
        avatarSrc="assets/img/quique.png"
        rightOffset="1.5rem"
      />
    </>
  );
};

export default CoursesDetails;