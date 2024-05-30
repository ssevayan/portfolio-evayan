import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work__card">
      <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
        <img src={item.image} alt={item.title} className="work__img" />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <div className="work__buttons">
        {item.githubLink && (
          <a href={item.githubLink} className="work__button" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github work__button-icon"></i>
          </a>
        )}
        <span className="work__button" onClick={() => toggleTab(item.id)}>
          Learn More
          <i className="bx bx-info-circle work__button-icon"></i>
        </span>
        <a href={item.demoLink} className="work__button" target="_blank" rel="noopener noreferrer">
          Demo
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
      <div className="tech-icons">
        {item.icons.map((icon, index) => (
          <i className={`bx bxl-${icon} tech-icon ${icon}`} key={index}></i>
        ))}
      </div>
      <div
        className={
          toggleState === item.id
            ? "qualification__modal active-modal"
            : "qualification__modal"
        }
      >
        <div className="qualification__modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times qualification__modal-close"></i>
          <h3 className="modal__title">{item.title}</h3>
          <p className="modal__description" dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br>') }}></p>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
