import React from "react";

import HeroHomeOne from "./HeroHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import ChooseHomeOne from "./ChooseHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import MarqueeOne from "@/common/MarqueeOne";
import FeatureHomeOne from "./FeatureHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import NewsletterHomeOne from "./NewsletterHomeOne";
import TopCategoryHomeOne from "./TopCategoryHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import PopularCoursesHomeOne from "./PopularCoursesHomeOne";
import QuiquebotWidget from "@/components/chat";

const HomeOne = () => {
	return (
		<>
			<HeaderOne />
			<HeroHomeOne />
			<FeatureHomeOne />
			<TopCategoryHomeOne />
			<MarqueeOne />
			<ChooseHomeOne />			
			<FooterOne />
			<QuiquebotWidget
					avatarSrc="assets/img/quique.png"
					rightOffset="1.5rem"  
      		/>
		</>
	);
};

export default HomeOne;
