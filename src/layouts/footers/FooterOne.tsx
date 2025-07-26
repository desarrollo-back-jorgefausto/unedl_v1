
import Link from 'next/link';
import React from 'react';

const FooterOne = ({style_2} : any) => {
  return (
       <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
            <div className="container">
                <div className={`footer-widget-wrapper ${style_2 ? "style-4" : ""}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">                                   
                                </div>
                                <div className="footer-content">
                                    <p>
                                       Transforma tu pasión en tu profesión
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">                           
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Acceso rápido</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="#">Oferta académica</Link></li>
                                    <li><Link href="#">Directorio telefónico</Link></li>
                                    <li><Link href="#">Calendario de trámites</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Contáctanos</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <h5 style={{ color: "white" }}>Dirección:</h5>
                                        <h4 style={{ color: "white" }}>
                                         Av. Enrique Díaz de León No. 324 <br />
                                         Guadalajara, Jalisco <br />
                                         México
                                        </h4>
                                        <li>
                                            <a href="unedl.universidad@unedl.edu.mx" className="link">unedl.universidad@unedl.edu.mx</a>
                                        </li>
                                        <li>
                                            <a href="tel:+5213338273000">+52 1 (33) 3827 3000</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s">
                    <p>Copyright © <Link href="/">Universidad Enrique Díaz de León</Link>, Todos los derechos reservados.</p>
                </div>
            </div>
            <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    UNEDL
                </h2>
            </div>
        </footer>
  );
};

export default FooterOne;