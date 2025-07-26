

import Count from '@/common/Count';
import React from 'react';

const ChooseHomeOne = () => {
  return (
      <section className="choose-us-section fix section-padding">
            <div className="container">
                <div className="main-choose-us-wrapper">
                    <div className="line-shape">
                        <img src="assets/img/line-shape.png" alt="" />
                    </div>
                    <div className="choose-us-top">
                        <div className="section-title mb-0">
                            <h6 className="wow fadeInUp">
                                ¿Por qué elegirnos?
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                               Domina tu futuro con programas acreditados y laboratorios de vanguardia
                            </h2>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                                <p>Calidad reconocida</p>
                               <h2><span className="odometer" data-count="99"> <Count number={99} text='%' /> </span></h2>
                               <p>
                                    Garantía de estándares académicos nacionales.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-us-bottom">
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-graduation"></i>
                            </div>
                            <div className="content">
                                <p>Número de licenciaturas</p>
                                <h2><span className="odometer" data-count="10"><Count number={10} text='.0' /></span></h2>
                                <p>
                                    Con reconocimiento oficial y planes actualizados.
                                </p>
                            </div>
                        </div>
                        <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <p>Formación de los profesores.</p>
                                <h2><span className="odometer" data-count="100"><Count number={100} text='+' /></span></h2>
                                <p>
                                    Experiencia profesional y académica comprobada
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default ChooseHomeOne;