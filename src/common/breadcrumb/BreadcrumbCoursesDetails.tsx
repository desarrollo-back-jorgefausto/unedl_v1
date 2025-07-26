
import Link from 'next/link';
import React from 'react';

const BreadcrumbCoursesDetails = () => {
  return (

       <section className="breadcrumb-wrapper style-2">
        <div className="shape-1">
            <img src="assets/img/breadcrumb/shape-1.png" alt="img" />
        </div>
        <div className="shape-2">
            <img src="assets/img/breadcrumb/shape-2.png" alt="img" />
        </div>
        <div className="dot-shape">
            <img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
        </div>
        <div className="vector-shape">
            <img src="assets/img/breadcrumb/Vector.png" alt="img" />
        </div>
        <div className="container">
            <div className="page-heading">             
                <div className="breadcrumb-content">
                    <h1>Administración Estratégica de los Negocios</h1>
                    <h3 style={{ color: "white", textAlign: "justify" }}>La Administración Estratégica de los Negocios es el primer gran paso hacia tus metas profesionales y personales. Aquí no solo continuarás tu formación académica, también descubrirás tus talentos, fortalecerás tus habilidades y comenzarás a construir el camino hacia la universidad o el mundo laboral.</h3>
                </div>
            </div>
        </div>
        </section>

  );
};

export default BreadcrumbCoursesDetails;