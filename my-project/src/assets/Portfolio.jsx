import React from "react";

export default function Portfolio(){
  return(
    <section className="portfolio section" id="portfolio">
                    <h2 className="section__title">Portfolio</h2>
                    <span className="section__subtitle">Most recent work</span>

                    <div className="portfolio__container container swiper-container">
                        <div className="swiper-wrapper">
                            {/* <!---------------------------------------------- portfolio 1----------------------------------------------> */}
                                <div className="portfolio__content grid swiper-slide">
                                    <img src="assets/img/portfolio1.jpg" alt="" class="portfolio__img"/>

                                    <div className="portfolio__data">
                                        <h3 className="portfolio__title">Modern Website</h3>
                                        <p className="portfolio__description">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                                        <a href="#" className="button button--flex button--small portfolio__button">
                                            Demo
                                            <i className="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>
                            {/* <!---------------------------------------------- portfolio 2----------------------------------------------> */}

                                <div className="portfolio__content grid swiper-slide">
                                    <img src="assets/img/portfolio2.jpg" alt="" className="portfolio__img"/>

                                    <div className="portfolio__data">
                                        <h3 className="portfolio__title">Brand builder</h3>
                                        <p className="portfolio__description">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                                        <a href="#" className="button button--flex button--small portfolio__button">
                                            Demo
                                            <i className="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>
                                          {/* <!---------------------------------------------- portfolio 3----------------------------------------------> */}
                  

                                <div className="portfolio__content grid swiper-slide">
                                    <img src="assets/img/portfolio3.jpg" alt="" className="portfolio__img"/>

                                    <div className="portfolio__data">
                                        <h3 className="portfolio__title">Online stores</h3>
                                        <p className="portfolio__description">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                                        <a href="#" className="button button--flex button--small portfolio__button">
                                            Demo
                                            <i className="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>

                        </div>

                        {/* <!-- Add Arrows --> */}
                             <div className="swiper-button-next">
                                <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                             </div>
                                <div className="swiper-button-prev">
                                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                                </div>
                        {/* <!-- Add Pagination --> */}
                                <div className="swiper-pagination"></div>
                                </div>
                    </div>
                    </div>
                    
                 </section>

            
  )
}