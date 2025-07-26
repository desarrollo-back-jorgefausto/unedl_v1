"use client"
import React from 'react';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const RelatedCourses = () => {
  return (
      <section className="popular-courses-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp">Otras licenciaturas</h2>
                </div>
                <Swiper
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false
                }}
                pagination={{
                  el: ".dot",
                  clickable: true
                }}
                modules={[ Autoplay]}
                breakpoints={ {
                      1199: {
                          slidesPerView: 3,
                      },
                      991: {
                          slidesPerView: 2,
                      },
                      767: {
                          slidesPerView: 2,
                      },
                      575: {
                          slidesPerView: 1,
                      },
                      0: {
                          slidesPerView: 1,
                      },
                  }}
                 className="swiper courses-slider"> 

                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="assets/img/derecho1.jpg" alt="img" />
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses-grid">Ciencias Sociales</Link>
                                            </li>
                                            <li>
                                                <h6 style={{margin: 0, padding: 0, textAlign: 'right'}}>Presencial</h6>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-grid">
                                               Licenciatura en Derecho
                                            </Link>
                                        </h3>
                                        <ul className="post-class">                                          
                                            <li>
                                                <Link href="#" className="theme-btn">Más detalles</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="assets/img/gastro2.jpg" alt="img" />
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses-grid">Servicios</Link>
                                            </li>
                                            <li>
                                                <h6 style={{margin: 0, padding: 0, textAlign: 'right'}}>Presencial</h6>
                                            </li>
                                        </ul>                                        
                                        <h3>
                                            <Link href="/courses-grid">
                                               Gastronomía
                                            </Link>
                                        </h3>
                                        <ul className="post-class">                                          
                                            <li>
                                                <Link href="#" className="theme-btn">Más detalles</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="assets/img/contaduria2.jpg" alt="img" />
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses-grid">Económico Administrativas</Link>
                                            </li>
                                            <li>
                                                <h6 style={{margin: 0, padding: 0, textAlign: 'right'}}>Virtual</h6>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-grid">
                                               Contaduría y Auditoría
                                            </Link>
                                        </h3>
                                        <ul className="post-class">                                          
                                            <li>
                                                <Link href="#" className="theme-btn">Más detalles</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="assets/img/software1.jpg" alt="img" />
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img" />
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses-grid">Ingenierías</Link>
                                            </li>
                                            <li>
                                                <h6 style={{margin: 0, padding: 0, textAlign: 'right'}}>Presencial</h6>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-grid">
                                               Ingeniería en Software
                                            </Link>
                                        </h3>
                                        <ul className="post-class">                                          
                                            <li>
                                                <Link href="#" className="theme-btn">Más detalles</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
  );
};

export default RelatedCourses;