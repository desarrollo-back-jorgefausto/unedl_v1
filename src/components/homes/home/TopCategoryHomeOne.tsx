import Link from 'next/link';
import React from 'react';

const TopCategoryHomeOne = () => {
    return (
        <section className="top-category section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <h6 className="wow fadeInUp">Áreas de conocimiento</h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Cursos de Educación y Enseñanza
                                de Nueva Generación
                            </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            La educación es un proceso vital que fomenta el crecimiento personal, el desarrollo social y el avance intelectual.
                        </p>
                        <div className="top-category-button">
                            <Link href="/courses-grid" className="theme-btn yellow-btn mt-40 wow fadeInUp" data-wow-delay=".3s">Ver Todas las Categorías</Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="top-category-wrapper">
                            <div className="row g-0">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items active">
                                        <Link href="/courses-grid">
                                            <div className="icon"><i className="flaticon-color-palette"></i></div>
                                            <h6>Artes</h6>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses-grid">
                                            <div className="icon"><i className="flaticon-cooperation"></i></div>
                                            <h6>Sociales</h6>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link href="/courses-grid">
                                            <div className="icon"><i className="flaticon-megaphone"></i></div>
                                            <h6>Servicios</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 justify-content-center">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses-grid">
                                            <div className="icon"><i className="flaticon-healthcare"></i></div>
                                            <h6>Salud</h6>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses-grid">
                                            <div className="icon"><i className="flaticon-coding"></i></div>
                                            <h6>Ingeniería</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategoryHomeOne;