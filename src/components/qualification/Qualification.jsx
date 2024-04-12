import React, { useState } from "react";
import "./qualification.css";
import jQuery from "../../assets/jquery.png";
import PHP from "../../assets/php.png";
import Boostrap from "../../assets/boostrap.png";
import Python from "../../assets/python.png";
import FullStack from "../../assets/full-stack.png";
import Graphic from "../../assets/graphic-design.png";
import UX from "../../assets/ux.png";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">

        <div className="qualification__sections">

          <div className="qualification__data">
            <div>
            <ul>
                <li>
                  <h3 className="qualification__title">Learn jQuery Course 
                    <span className="qualification__button" onClick={() => toggleTab(1)}>
                      <i className="uil uil-external-link-alt qualification__button-icon"></i>
                    </span>
                  </h3>
              
                  <div
                    className={
                      toggleState === 1
                        ? "qualification__modal active-modal"
                        : "qualification__modal"
                    }
                  > 
                    <div className="qualification__modal-content">
                      <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times qualification__modal-close"
                      ></i>
                      <img src={jQuery} alt="Modal Visual Content"/>
                    </div>
                  </div>
                </li>

                <li>
                  <h3 className="qualification__title">Learn Bootstrap Course
                    <span className="qualification__button" onClick={() => toggleTab(2)}>
                      <i className="uil uil-external-link-alt qualification__button-icon"></i>
                    </span>
                  </h3>

                  <div
                    className={
                      toggleState === 2
                        ? "qualification__modal active-modal"
                        : "qualification__modal"
                    }
                  > 
                    <div className="qualification__modal-content">
                      <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times qualification__modal-close"
                      ></i>
                      <img src={Boostrap} alt="Modal Visual Content" />
                    </div>
                  </div>
                </li>

                <li>
                  <h3 className="qualification__title">Learn PHP Skill Path
                    <span className="qualification__button" onClick={() => toggleTab(3)}>
                      <i className="uil uil-external-link-alt qualification__button-icon"></i>
                    </span>
                  </h3>

                  <div
                    className={
                      toggleState === 3
                        ? "qualification__modal active-modal"
                        : "qualification__modal"
                    }
                  > 
                    <div className="qualification__modal-content">
                      <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times qualification__modal-close"
                      ></i>
                      <img src={PHP} alt="Modal Visual Content" />
                    </div>
                  </div>
                </li>

                <li>
                  <h3 className="qualification__title">Learn Python 3 Course
                    <span className="qualification__button" onClick={() => toggleTab(4)}>
                      <i className="uil uil-external-link-alt qualification__button-icon"></i>
                    </span>
                  </h3>

                  <div
                    className={
                      toggleState === 4
                        ? "qualification__modal active-modal"
                        : "qualification__modal"
                    }
                  > 
                    <div className="qualification__modal-content">
                      <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times qualification__modal-close"
                      ></i>
                      <img src={Python} alt="Modal Visual Content" />
                    </div>
                  </div>
                </li>
              </ul>

              <span className="qualification__subtitle">
                IT Career Switch
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2024 - Present
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Full-Stack Engineer
                <span className="qualification__button" onClick={() => toggleTab(5)}>
                  <i className="uil uil-external-link-alt qualification__button-icon"></i>
                </span>
              </h3>

              <div
                className={
                  toggleState === 5
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }
              > 
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times qualification__modal-close"
                  ></i>
                  <img src={FullStack} alt="Modal Visual Content" />
                </div>
              </div>


              <span className="qualification__subtitle">
                IT Career Switch
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2023 - 2024
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <ul>
                <li>
                  <h3 className="qualification__title">Fundamentals of Graphic Design 
                    <span className="qualification__button" onClick={() => toggleTab(6)}>
                      <i className="uil uil-external-link-alt qualification__button-icon"></i>
                    </span>
                  </h3>
              
                  <div
                    className={
                      toggleState === 6
                        ? "qualification__modal active-modal"
                        : "qualification__modal"
                    }
                  > 
                    <div className="qualification__modal-content">
                      <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times qualification__modal-close"
                      ></i>
                      <img src={Graphic} alt="Modal Visual Content" />
                    </div>
                  </div>
                </li>

                <li>
                  <h3 className="qualification__title">Introduction to User Experience Design
                    <span className="qualification__button" onClick={() => toggleTab(7)}>
                      <i className="uil uil-external-link-alt qualification__button-icon"></i>
                    </span>
                  </h3>

                  <div
                    className={
                      toggleState === 7
                        ? "qualification__modal active-modal"
                        : "qualification__modal"
                    }
                  > 
                    <div className="qualification__modal-content">
                      <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times qualification__modal-close"
                      ></i>
                      <img src={UX} alt="Modal Visual Content" />
                    </div>
                  </div>
                </li>
              </ul>
              
              
              <span className="qualification__subtitle">
                Coursera
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2022 - 2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
            </div>

            <div>
              <h3 className="qualification__title">MSc degree: Advanced Mechanical Engineering Science</h3>
              <span className="qualification__subtitle">
                UK - University of Southampton
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2021 - 2022
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Qualification;
