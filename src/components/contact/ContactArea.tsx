
import React from 'react';

const ContactArea = () => {
  return (
      <section className="contact-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Contáctanos</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Necesitas más información?
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-map"></i>
                            </div>
                            <h5>
                               Nuestra ubicación
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h5>
                                Av. Enrique Díaz de León No. 324 <br />
                                Guadalajara, Jalisco <br />
                                México
                            </h5>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-send-data"></i>
                            </div>
                            <h5>
                                Correo Electrónico
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h6>
                                <a href="mailto:unedl.universidad@unedl.edu.mx">unedl.universidad@unedl.edu.mx</a> <br />                                
                            </h6>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <img src="assets/img/call.png" alt="img" />
                            </div>
                            <h5>
                                Envíanos un Whatsapp
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h5>
                                <a href="https://api.whatsapp.com/send/?phone=5213318102301&text=Necesito+informes+de+UNEDL&type=phone_number&app_absent=0">+52 133 1810 2301</a> <br />                                
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default ContactArea;