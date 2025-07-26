
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import MarqueeOne from '@/common/MarqueeOne';
import CoursesArea from './CoursesArea';
import QuiquebotWidget from '../chat';

const Courses = () => {
  return (
		<>
			<HeaderOne />
			<BreadcrumbCourses title="Nuestra oferta" subtitle="Courses" />
			<CoursesArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
			<QuiquebotWidget
								avatarSrc="assets/img/quique.png"
								rightOffset="1.5rem"  
						/>
		</>
	);
};

export default Courses;