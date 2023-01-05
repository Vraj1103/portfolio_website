import React from "react";

export default function Qualification(){
    return(
        <section className="qualification section">
                    <h2 className="section__title">Qualification</h2>
                    <span className="section__subtitle">My personal journey</span>

                    <div className="qualification__container container"> 
                        <div className="qualification__tabs">
                            <div className="qualification__button button--flex  qualification__active" data-target='#education'>
                                <i className="uil uil-graduation-cap qualification__icon"></i>
                                Education
                            </div>

                            <div className="qualification__button button--flex" data-target='#work'>
                                <i className="uil uil-briefcase-alt qualification__icon"></i>
                                Experience
                            </div>
                        </div>

                        <div className="qualification__sections">
                            {/* <!------------------------------------qualification content 1 -----------------------------------------> */}
                            <div className="qualification__content qualification__active" data-content id="education"> 
                                {/* <!------------------------------------qualification 1 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Computer Engineer</h3>
                                        <span className="qualification__subtitle">PDEU</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021-2025
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                </div>

                                {/* <!------------------------------------qualification 2 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">Web Design</h3>
                                        <span className="qualification__subtitle">Self-taught</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2022
                                        </div>
                                    </div>                                  
                                </div>  

                                {/* <!------------------------------------qualification 3 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Web Development</h3>
                                        <span className="qualification__subtitle">Self-taught</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2022
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                {/* <!------------------------------------qualification 4 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        {/* <!-- <span class="qualification__line"></span> --> */}
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">Web Design</h3>
                                        <span className="qualification__subtitle">Self-taught</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2022
                                        </div>
                                    </div>                                  
                                </div>  

                            </div>
                            {/* <!------------------------------------qualification content 2 -----------------------------------------> */}
                            <div className="qualification__content" data-content id="work"> 
                                {/* <!------------------------------------qualification 1 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Computer </h3>
                                        <span className="qualification__subtitle">PDEU</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021-2025
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                </div>

                                {/* <!------------------------------------qualification 2 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">Web </h3>
                                        <span className="qualification__subtitle">Self-taught</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2022
                                        </div>
                                    </div>                                  
                                </div>  

                                {/* <!------------------------------------qualification 3 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title"> Development</h3>
                                        <span className="qualification__subtitle">Self-taught</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2022
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                {/* <!------------------------------------qualification 4 ----------------------------------------> */}
                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        {/* <!-- <span className="qualification__line"></span> --> */}
                                    </div>

                                    <div>
                                        <h3 className="qualification__title"> Design</h3>
                                        <span className="qualification__subtitle">Self-taught</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2022
                                        </div>
                                    </div>                                  
                                </div>  

                            </div>
                            

                        </div>
                    </div>
                 </section>
    )
}