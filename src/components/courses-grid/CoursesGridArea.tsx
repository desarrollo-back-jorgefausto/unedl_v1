"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const CoursesGridArea = () => {
  const selectHandler = (e: any) => { };

  return (
      <section className="courses-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4">
                        <div className="courses-main-sidebar-area">
                            <div className="courses-main-sidebar">
                                <div className="courses-sidebar-items">
                                    <div className="wid-title style-2">
                                        <h5>Búsqueda</h5>
                                    </div>
                                    <div className="search-widget">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="text" placeholder="Buscar carreras" />
                                            <button type="submit"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Licenciaturas</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Todas las licenciaturas
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Licenciatuas SEJ
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                     Licenciatuas UdG
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Posgrados
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                   Educación continua
                                                </span>
                                            </span>
                                        </label>                                       
                                    </div>
                                </div>
                                 <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Áreas</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Todas las áreas
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                   Ciencias Sociales
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                     Servicios
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                   Ingeniería
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                  Arte y Diseño
                                                </span>
                                            </span>
                                        </label>     
                                         <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                  Económico - Administrativas
                                                </span>
                                            </span>
                                        </label>                                      
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Turno</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" checked />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Todos los turnos
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Matutino
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Vespertino
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Nocturno
                                                </span>
                                            </span>
                                        </label>
                                         <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Fines de semana
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>                              
                            <Link href="#" className="theme-btn"><i className="far fa-times-circle"></i> Limpiar filtros</Link>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="coureses-notices-wrapper">
                            <div className="courses-showing">
                                <div className="icon-items">
                                    <Link href="/courses-grid"><i className="fas fa-th"></i></Link>                                  
                                </div>
                                <h5>Mostrando <span>1-6</span> de <span>20</span> ofertas académicas</h5>
                            </div>                           
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/negocios.jpg" alt="img" />
                                            <h3 className="courses-title"></h3>
                                            <h4 className="topic-title" style={{color: "white"}} >Administración Estratégica de los Negocios</h4>
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
                                                    <Link href="/courses-details">Descripción</Link>
                                                </li>                                              
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Formar profesionales capaces de gestionar proyectos de manera efectiva.
                                                </Link>
                                            </h5>
                                           
                                            <ul className="post-class">
                                                
                                            </ul>
                                        </div>
                                    </div>
                                  <div className="courses-card-items-hover">
                                      <div className="courses-content">
                                          <ul className="post-cat">
                                              <li>
                                                  <Link style={{ color: "white" }} href="/courses-details">Económico - Administrativas</Link>
                                              </li>
                                          </ul>
                                          <h6>
                                              <Link href="/courses-details" style={{ color: "white" }} >
                                                  Administración Estratégica de los Negocios
                                              </Link>
                                          </h6>
                                          <br />
                                          <div style={{ fontSize: "12px" }}>
                                              <p style={{ color: "yellow" }}> Perfil de ingreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Conocimiento de álgebra básica.</li>
                                                  <li>* Conocimiento de ortografía, sintaxis y gramática avanzada.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Habilidades</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Manejo de herramientas digitales.</li>
                                                  <li>* Conocimiento de técnicas de investigación.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Perfil de egreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Evalúa el potencial del mercado, detectando oportunidades y desarrollando estrategias de comercialización rentables dentro de un contexto global</li>
                                              </ul>
                                          </div>
                                          <Link href="/courses-details" className="theme-btn yellow-btn">Solicitar informes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/derecho.jpg" alt="img" />
                                            <h3 className="courses-title"></h3>
                                            <h4 className="topic-title" style={{color: "black"}}>Derecho</h4>
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
                                                     <Link href="/courses-grid">Descripción</Link>
                                                </li>                                              
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Formar profesionales con conocimientos actuales y especializados en el campo del derecho en las organizaciones.
                                                </Link>
                                                <br />
                                            </h5>                                            
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses-details">Ciencias Sociales</Link>
                                               </li>                                              
                                            </ul>
                                            <h6>
                                              <Link href="/courses-details" style={{ color: "white" }} >
                                                  Derecho
                                              </Link>
                                          </h6>
                                          <br />
                                          <div style={{ fontSize: "12px" }}>
                                              <p style={{ color: "yellow" }}> Perfil de ingreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Capacidad de análisis y síntesis</li>
                                                  <li>* Habilidad lectora.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Habilidades</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Interés en los contextos sociales, políticos y económicos.</li>
                                                  <li>* Actitud crítica y autocritica sustentada en valores.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Perfil de egreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Aplica la investigación en el ámbito jurídico</li>
                                                  <li>* Asesora y diseña estrategias para la solución de conflictos legales</li>
                                                  <li>* Aplica los valores éticos-jurídicos en el ejercicio de la profesión</li>                                                  
                                              </ul>
                                          </div>
                                          <Link href="/courses-details" className="theme-btn yellow-btn">Solicitar informes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                           <img src="assets/img/gastro.jpg" alt="img" />
                                            <h3 className="courses-title"></h3>
                                            <h4 className="topic-title">Gastronomía</h4>
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
                                                    <Link href="/courses-details">Descripción</Link>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details" style={{textAlign: "center"}}>
                                                    Formar integra y profesionalmente a los futuros chefs, con una sólida base teórica y práctica.
                                                </Link>
                                            </h5>                                            
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                          <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses-details">Servicios</Link>
                                               </li>                                              
                                            </ul>
                                            <h6>
                                              <Link href="/courses-details" style={{ color: "white" }} >
                                                  Gastronomía
                                              </Link>
                                          </h6>
                                          <br />
                                          <div style={{ fontSize: "12px" }}>
                                              <p style={{ color: "yellow" }}> Perfil de ingreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Conocimientos básicos de inglés</li>
                                                  <li>* Creatividad.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Habilidades</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Actitud emprendedora y proactiva.</li>
                                                  <li>* Habilidad /Destreza espacial y manual.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Perfil de egreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Reconoce elementos culturales, técnicas, manejo de equipo y materia prima del ámbito nacional e internacional</li>
                                                  <li>* Interpreta la normatividad vigente en cuanto a seguridad e higiene relativas al personal, instalaciones, insumos y procesos gastronómicos.</li>                                         
                                              </ul>
                                          </div>
                                          <Link href="/courses-details" className="theme-btn yellow-btn">Solicitar informes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/comunicacion.jpg" alt="img" />
                                            <h3 className="courses-title"></h3>
                                            <h4 className="topic-title" style={{color: "black"}}>Ciencias de la Comunicación</h4>
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
                                                     <Link href="/courses-grid">Descripción</Link>
                                                </li>                                              
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Profesional en el área de comunicación con una visión clara y analitica de los fenómenos sociales, políticos y económicos.
                                                </Link>
                                                <br />
                                            </h5>                                            
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses-details">Ciencias Sociales</Link>
                                               </li>                                              
                                            </ul>
                                            <h6>
                                              <Link href="/courses-details" style={{ color: "white" }} >
                                                  Ciencias de la Comunicación
                                              </Link>
                                          </h6>
                                          <br />
                                          <div style={{ fontSize: "12px" }}>
                                              <p style={{ color: "yellow" }}> Perfil de ingreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Conocimiento de Ortografía, síntesis y gramática</li>
                                                  <li>* Expresar sus ideas de forma concreta y coherente, tanto de manera verbal como escrita</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Habilidades</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Administración del tiempo.</li>
                                                  <li>* Capacidad de comprensión lectora.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Perfil de egreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Identifica las diversas teorías de comunicación que impactan a las masas para emitir mensajes a las audiencias</li>                                                 
                                              </ul>
                                          </div>
                                          <Link href="/courses-details" className="theme-btn yellow-btn">Solicitar informes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                          <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/disenio.jpg" alt="img" />
                                            <h3 className="courses-title"></h3>
                                            <h4 className="topic-title" style={{color: "black"}}>Diseño Gráfico y Digital</h4>
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
                                                     <Link href="/courses-grid">Descripción</Link>
                                                </li>                                              
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                   Profesionista en el campo del diseño gráfico y digital, con una sólida base teórica y práctica para crear soluciones visuales efectivas.
                                                </Link>
                                                <br />
                                            </h5>                                            
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses-details">Arte y Diseño</Link>
                                               </li>                                              
                                            </ul>
                                            <h6>
                                              <Link href="/courses-details" style={{ color: "white" }} >
                                                  Diseño Gráfico y Digital
                                              </Link>
                                          </h6>
                                          <br />
                                          <div style={{ fontSize: "12px" }}>
                                              <p style={{ color: "yellow" }}> Perfil de ingreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>*  Ortografía, síntesis, redacción y gramática</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Habilidades</p>
                                              <ul style={{ color: "white" }}>                                                  
                                                  <li>* Capacidad de análisis y síntesis.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Perfil de egreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Distingue la investigación científica, documental y de campo que fundamente la propuesta teórica y gráfica</li>
                                                  <li>* Analiza de forma inédita proyectos de comunicación oral, escrita y gráfica, con base en la conceptualización de las necesidades sociales</li>
                                              </ul>
                                          </div>
                                          <Link href="/courses-details" className="theme-btn yellow-btn">Solicitar informes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                           <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/software.jpg" alt="img" />
                                            <h3 className="courses-title"></h3>
                                            <h4 className="topic-title" style={{color: "black"}}>Ingeniería en Software</h4>
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
                                                     <Link href="/courses-grid">Descripción</Link>
                                                </li>                                              
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Ingeniería de software está diseñada para formar profesionales para desarrollar soluciones innovadoras.
                                                </Link>
                                                <br />
                                            </h5>                                            
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses-details">Ingeniería</Link>
                                               </li>                                              
                                            </ul>
                                            <h6>
                                              <Link href="/courses-details" style={{ color: "white" }} >
                                                  Ingeniería en Software
                                              </Link>
                                          </h6>
                                          <br />
                                          <div style={{ fontSize: "12px" }}>
                                              <p style={{ color: "yellow" }}> Perfil de ingreso</p>
                                              <ul style={{ color: "white" }}>                                                  
                                                  <li>* Conocimiento en ortografía, sintaxis y gramática avanzada.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Habilidades</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Expresión de ideas en forma oral y escrita planeación, organización.</li>
                                              </ul>
                                              <p style={{ color: "yellow" }}> Perfil de egreso</p>
                                              <ul style={{ color: "white" }}>
                                                  <li>* Al finalizar el programa, nuestros egresados se distinguirán en el mercado debido a que en nuestra casa de estudios nos hemos dado a la tarea de estructurar habilidades y destrezas que formen a un profesionista integral</li>
                                              </ul>
                                          </div>
                                          <Link href="/courses-details" className="theme-btn yellow-btn">Solicitar informes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                              
                        <div className="page-nav-wrap pt-5">
                            <ul>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>                                
                                <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default CoursesGridArea;