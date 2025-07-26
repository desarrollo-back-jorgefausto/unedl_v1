import { StaticImageData } from "next/image";

import demo_img_1 from "../../public/assets/img/header/home-1.jpg";
import demo_img_2 from "../../public/assets/img/header/home-2.jpg";
import demo_img_3 from "../../public/assets/img/header/home-3.jpg";
import demo_img_4 from "../../public/assets/img/header/home-4.jpg";
import demo_img_5 from "../../public/assets/img/header/home-5.jpg";
import demo_img_6 from "../../public/assets/img/header/home-6.jpg";
 

 
interface DataType {
	id: number;
	title?: string;
	link: string;
	icon: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	has_dropdown_inner?: boolean;
	sub_menus?: {
		link?: string;
		title?: string;
		title2?: string | any;
		btn_title?: string;
		one_page_link?: string | any;
		one_page_title?: string;
		demo_img?: StaticImageData | any;
    inner_menu?: boolean;   
    inner_menus?: {
       link?: string; title?: string 
    }[];
	}[];
}

// menu data
const menu_data:DataType[] = [
	{
		id: 1,
		title: "Inicio",
		link: "/",
        icon: "fas fa-home-lg",
		has_dropdown: false,		
	},
	{
		id: 2,
		title: "Oferta Académica",
		link: "#",
    	icon: "fas fa-book",
		has_dropdown: true,
		sub_menus: [
			{ link: "/courses-grid", title: "Conoce nuestra oferta" },
		],
	},	
	{
		id: 6,
		title: "Contáctanos",
		link: "/contact",
    icon: "fas fa-phone-rotary",
		has_dropdown: false,
	},
];
export default menu_data;
