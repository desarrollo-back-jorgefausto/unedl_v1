
import React from 'react';

const MarqueeOne = ({style_2} : any) => {
  return (
       <div className="marquee-section style-header">
            <div className={`mycustom-marque  ${style_2 ? "theme-green-bg-1" : "header-marque theme-blue-bg"}`}>
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div></div>
                    </div>
                    <div className="comm">
                        <div></div>
                    </div>
                    <div className="comm">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

  );
};

export default MarqueeOne;