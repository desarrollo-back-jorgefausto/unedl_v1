import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import ContactArea from "./ContactArea";
import MapArea from "./MapArea";
import ContactForm from "./ContactForm";
import QuiquebotWidget from "../chat";

const Contact = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Contáctanos" />
			<ContactArea />
			<MapArea />
			<ContactForm />
			<MarqueeOne style_2={true} />
			<FooterOne />
			<QuiquebotWidget
								avatarSrc="assets/img/quique.png"
								rightOffset="1.5rem"  
						/>
		</>
	);
};

export default Contact;
