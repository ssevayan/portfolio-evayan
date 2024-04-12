import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Eva Yan
      </h1>
      <h3 className="home__subtitle">
        <div className="static-txt">Web</div>
        <ul className="dynamic-txts">
          <li><span>Developer</span></li>
          <li><span>Designer</span></li>
        </ul>
      </h3>
      <p className="home__description">
      I'm a passionate web developer and designer based in UK, specializing in creating stunning, user-friendly websites and applications.
      </p>
      <div className="home__tech">
        Tech:
        <i className='bx bxl-html5 tech-icon html5'></i> {/* HTML5 icon */}
        <i className='bx bxl-css3 tech-icon css3'></i> {/* CSS3 icon */}
        <i className='bx bxl-javascript tech-icon javascript'></i> {/* JavaScript icon */}
        <i className='bx bxl-react tech-icon react'></i>
        <i className='bx bxl-jquery tech-icon jquery'></i>
        <i className='bx bxl-git tech-icon git'></i>
        <i className='bx bxl-bootstrap tech-icon bootstrap'></i>
        <i className='bx bxl-php tech-icon php'></i>
        <i className='bx bxl-postgresql tech-icon postgresql'></i>
        <i className='bx bxl-wordpress tech-icon wordpress'></i>
        <i className='bx bxl-figma tech-icon figma'></i>
      </div>
    </div>
  );
};

export default Data;
