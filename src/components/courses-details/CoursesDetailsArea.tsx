"use client"
import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, { useState } from 'react';

const CoursesDetailsArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"ZfX2OGJXR68"}
            />
            {/* video modal end */}
            <section className="courses-details-section section-padding pt-0">
                <div className="container">
                    <div className="courses-details-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="courses-details-items">
                                    <div className="courses-image">
                                        <img src="assets/img/negocios3.png" alt="img" />
                                        <a
                                            onClick={() => setIsVideoOpen(true)}
                                            style={{ cursor: "pointer" }}
                                            className="video-btn ripple video-popup">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                    <div className="courses-details-content">
                                        <ul className="nav">
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                                                <a href="#Course" data-bs-toggle="tab" className="nav-link active">
                                                    Detalles
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                                    Plan de Estudios
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Instructors" data-bs-toggle="tab" className="nav-link">
                                                    Turno
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="Course" className="tab-pane fade show active">
                                                <div className="description-content">
                                                    <p style={{textAlign: 'justify'}}>La Licenciatura en Administración Estratégica de los Negocios es un programa educativo que busca formar profesionales con las competencias necesarias para enfrentar los retos del entorno empresarial actual.</p>                                                <br />
                                                    <h3>PERFIL DE INGRESO</h3>
                                                    <br />
                                                    <h4>CONOCIMIENTO</h4>
                                                    <ul>
                                                        <li>Conocimiento de álgebra básica.</li>
                                                        <li>Conocimiento de ortografía, sintaxis y gramática avanzada.</li>
                                                    </ul>
                                                    <br />
                                                    <h4>HABILIDADES</h4>
                                                    <ul>
                                                        <li>Manejo intermedio de herramientas de internet</li>
                                                        <li>Manejo del tiempo</li>
                                                        <li>Autogestión</li>
                                                        <li>Capacidad de análisis y síntesis</li>
                                                        <li>Lectura de comprensión de textos de un área determinada</li>
                                                        <li>Trabajo en equipo</li>
                                                        <li>Expresión de ideas oral y escrita, planeación, organización.</li>
                                                        <li>Cultura general</li>
                                                        <li>Toma decisiones</li>
                                                    </ul>
                                                    <br />
                                                    <h4>APTITUDES</h4>
                                                    <ul>
                                                        <li>Disposición al aprendizaje y al trabajo</li>
                                                        <li>Responsabilidad</li>
                                                        <li>Honestidad</li>
                                                        <li>Tolerancia</li>
                                                        <li>Respeto</li>
                                                        <li>Compromiso</li>
                                                        <li>Puntualidad</li>
                                                        <li>Hábito de la lectura</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="Curriculum" className="tab-pane fade">
                                                <div className="course-curriculum-items">
                                                    <h3>Mapa curricular</h3>
                                                    <p style={{textAlign: 'justify'}}>El plan de estudios de la Licenciatura en Negocios está diseñado para formar profesionales capaces de enfrentar los retos del entorno empresarial global con una visión estratégica, ética y emprendedora. A lo largo de los diez cuatrimestres, el estudiante desarrollará competencias en áreas clave como finanzas, mercadotecnia, talento humano, legislación, emprendimiento y responsabilidad social. Además, se fortalece el dominio de una lengua extranjera, el pensamiento crítico y las habilidades directivas necesarias para liderar con éxito en organizaciones públicas o privadas, tanto a nivel nacional como internacional.</p>
                                                    <div className="courses-faq-items">
                                                        <div className="accordion" id="accordionExample" style={{textAlign: 'left'}} >

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading1">
                                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                                        Primer Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul className="ul-left-align" style={{ paddingLeft: '0px', marginLeft: '0px', textAlign: 'left' }}>
                                                                            <li><i className="fas fa-book"></i> Mundo Empresarial</li>
                                                                            <li><i className="fas fa-book"></i> Fundamentos de Microeconomía</li>
                                                                            <li><i className="fas fa-book"></i> Contabilidad Financiera I</li>
                                                                            <li><i className="fas fa-book"></i> Matemáticas Aplicables a los Negocios</li>
                                                                            <li><i className="fas fa-book"></i> Pensamiento Científico y Crítico</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera I</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading2">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                                        Segundo Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul className="ul-left-align">
                                                                            <li><i className="fas fa-book"></i> Diseño Organizacional y Modelo de Negocios</li>
                                                                            <li><i className="fas fa-book"></i> Fundamentos de Macroeconomía</li>
                                                                            <li><i className="fas fa-book"></i> Contabilidad Financiera II</li>
                                                                            <li><i className="fas fa-book"></i> Matemáticas Financieras</li>
                                                                            <li><i className="fas fa-book"></i> Legislación Civil</li>
                                                                            <li><i className="fas fa-book"></i> Tecnologías de la Información Aplicadas a la Administración</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera II</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading3">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                                        Tercer Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Contabilidad del Activo no Circulante y del Pasivo</li>
                                                                            <li><i className="fas fa-book"></i> Estadística para los Negocios</li>
                                                                            <li><i className="fas fa-book"></i> Legislación Comercial</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo de Habilidades de Liderazgo</li>
                                                                            <li><i className="fas fa-book"></i> Planeación del Talento Humano</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera III</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo de Ambientes de Calidad Total</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading4">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                                        Cuarto Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Seguridad Social</li>
                                                                            <li><i className="fas fa-book"></i> Mercados Financieros</li>
                                                                            <li><i className="fas fa-book"></i> Legislación Empresarial</li>
                                                                            <li><i className="fas fa-book"></i> Derecho Aduanal</li>
                                                                            <li><i className="fas fa-book"></i> Derecho Laboral</li>
                                                                            <li><i className="fas fa-book"></i> Gestión y Desarrollo de Talento Humano por Competencias</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera IV</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading5">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                                        Quinto Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Cálculo de Percepciones y Deducciones Laborales</li>
                                                                            <li><i className="fas fa-book"></i> Normas de Información Financiera Relativas a los Estados Financieros</li>
                                                                            <li><i className="fas fa-book"></i> Fundamentos de Costos y Técnicas de Aplicación</li>
                                                                            <li><i className="fas fa-book"></i> Profesionalización de la Administración de Empresas Familiares</li>
                                                                            <li><i className="fas fa-book"></i> Impuestos en el Comercio Exterior</li>
                                                                            <li><i className="fas fa-book"></i> Auditoría Interna y Administrativa</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera V</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading6">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                                        Sexto Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Diagnóstico y Soluciones Financieras</li>
                                                                            <li><i className="fas fa-book"></i> Investigación de Operaciones</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo del Emprendedor</li>
                                                                            <li><i className="fas fa-book"></i> Mercadotecnia</li>
                                                                            <li><i className="fas fa-book"></i> Impuestos a los Negocios</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Humano</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera VI</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading7">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                                        Séptimo Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Gestión de Ambientes de la Producción</li>
                                                                            <li><i className="fas fa-book"></i> Administración Estratégica de los Negocios</li>
                                                                            <li><i className="fas fa-book"></i> Contabilidad Administrativa</li>
                                                                            <li><i className="fas fa-book"></i> Emprendimiento Social y Sustentable</li>
                                                                            <li><i className="fas fa-book"></i> Investigación de Mercados</li>
                                                                            <li><i className="fas fa-book"></i> Integración del Talento Humano</li>
                                                                            <li><i className="fas fa-book"></i> Lengua Extranjera VII</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading8">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                                        Octavo Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Metodología de la Investigación I</li>
                                                                            <li><i className="fas fa-book"></i> Control Presupuestal</li>
                                                                            <li><i className="fas fa-book"></i> Taller de Seguridad e Higiene Laboral</li>
                                                                            <li><i className="fas fa-book"></i> Creación y Desarrollo de Nuevos Productos en Ambientes de Emprendimiento e Innovación</li>
                                                                            <li><i className="fas fa-book"></i> Gestión y Desarrollo de Tendencias en Atención al Cliente</li>
                                                                            <li><i className="fas fa-book"></i> Implementación de Sistemas de Calidad y Distintivos</li>
                                                                            <li><i className="fas fa-book"></i> Inglés de Negocios I</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading9">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                                        Noveno Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Metodología de la Investigación II</li>
                                                                            <li><i className="fas fa-book"></i> Análisis de Riesgos y Productos de Inversión</li>
                                                                            <li><i className="fas fa-book"></i> Administración Pública</li>
                                                                            <li><i className="fas fa-book"></i> Dirección de los Negocios en Ámbitos de Responsabilidad Social</li>
                                                                            <li><i className="fas fa-book"></i> Gestión y Desarrollo de la Imagen Corporativa</li>
                                                                            <li><i className="fas fa-book"></i> Formación del Talento Humano</li>
                                                                            <li><i className="fas fa-book"></i> Inglés de Negocios II</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id="heading10">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                                        Décimo Cuatrimestre
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <ul>
                                                                            <li><i className="fas fa-book"></i> Taller de Tesis</li>
                                                                            <li><i className="fas fa-book"></i> Ingeniería Financiera y Finanzas Internacionales</li>
                                                                            <li><i className="fas fa-book"></i> Plan de Negocios</li>
                                                                            <li><i className="fas fa-book"></i> Diseño de Estrategias de intervención Empresarial</li>
                                                                            <li><i className="fas fa-book"></i> Mercadotecnia Digital</li>
                                                                            <li><i className="fas fa-book"></i> Habilidades Directivas</li>
                                                                            <li><i className="fas fa-book"></i> Certificación de la Lengua Extranjera</li>
                                                                            <li><i className="fas fa-book"></i> Desarrollo Integral</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div id="Instructors" className="tab-pane fade">
                                                <div className="instructors-items">
                                                    <p>Disponible en el horario:</p>
                                                    <br />
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-check"></i>
                                                            <span> Matutino</span>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-check"></i>
                                                            <span> Virtual</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="courses-sidebar-area sticky-style">
                                    <div className="courses-items">
                                        <div className="courses-image">
                                            <img src="assets/img/negocios4.jpg" alt="img" />
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
                                    </div>
                                    <div className="courses-category-items">
                                        <h5>Información rápida:</h5>
                                        <ul>
                                            <li>
                                                <span>
                                                    <i className="far fa-chalkboard-teacher"></i>
                                                     Personal docente
                                                </span>
                                                <span className="text">Formadores Líderes</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="far fa-tally"></i>
                                                    Total de materias
                                                </span>
                                                <span className="text">60</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="far fa-clock"></i>
                                                    Duración
                                                </span>
                                                <span className="text">4 años</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="far fa-user"></i>
                                                    Estudiantes
                                                </span>
                                                <span className="text">1000+</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="far fa-calendar-alt"></i>
                                                    Próximo inicio
                                                </span>
                                                <span className="text">01 Sep 2025</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="far fa-phone"></i>
                                                    Costo
                                                </span>
                                                <span className="text">Llámanos</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fal fa-book"></i>
                                                    Modalidad
                                                </span>
                                                <span className="text">Presencial / Virtual</span>
                                            </li>
                                        </ul>
                                        <Link href="/courses-details" className="share-btn"><i className="fas fa-share"></i> Compartir</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursesDetailsArea;