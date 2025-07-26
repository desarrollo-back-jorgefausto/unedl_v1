
import React from 'react';

const FeatureHomeOne = () => {
  return (
      <section className="feature-section">
            <div className="row gx-0 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                <div className="col wow fadeInUp">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-teacher"></i>    
                        </div>
                        <div className="content">
                            <h3>Instructores</h3>
                            <p style={{textAlign: 'justify', textSizeAdjust: '10px'}}>
                                Contamos con un equipo de instructores altamente calificados y con amplia experiencia en sus respectivas áreas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".2s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-online-education"></i>
                        </div>
                        <div className="content">
                            <h3>Tecnología de vanguardia</h3>
                            <p style={{textAlign: 'justify', textSizeAdjust: '10px'}}>
                               Nos aseguramos de utilizar las herramientas y plataformas más avanzadas para ofrecer una experiencia de aprendizaje óptima.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".4s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-membership"></i>   
                        </div>
                        <div className="content">
                            <h3>Calidad avalada</h3>
                            <p style={{textAlign: 'justify', textSizeAdjust: '10px'}}>
                              Programas acreditados por CONFEDE y CIEES e institución con certificación ISO 9001:2015. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".6s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-community"></i>    
                        </div>
                        <div className="content">
                            <h3>Espacios</h3>
                            <p style={{textAlign: 'justify',  textSizeAdjust: '10px'}}>
                               Salas de juicios orales, estudios de TV, laboratorios de bioquímica, alimentos, fotografía y telemática que te preparan para el mundo real.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".8s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-group"></i>    
                        </div>
                        <div className="content">
                            <h3>Apoyo económico</h3>
                            <p style={{textAlign: 'justify',  textSizeAdjust: '10px'}}>
                                Becas SICyT e institucionales para iniciar o continuar tus estudios sin barreras
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default FeatureHomeOne;