
import React from 'react';

const MapArea = () => {
  return (
    <div className="map-area-section section-padding pt-0 fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="map-area">
              <iframe
                src="https://www.google.com/maps?q=UNEDL+Negocios,+Turismo,+MKT,+Av+Enrique+D%C3%ADaz+de+Le%C3%B3n+Sur+324,+Guadalajara,+Jalisco&z=18&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                title='Google Map of UNEDL - Negocios, Turismo, MKT'
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapArea;