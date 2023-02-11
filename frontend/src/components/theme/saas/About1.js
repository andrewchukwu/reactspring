import React from 'react';

function About1() {
    return <div>
        <section id="about" className="about-section pt-150">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img">
                            <img src="assets/img/about/about-1.png" alt="" className="w-100" />
                            <img
                                src="assets/img/about/about-left-shape.svg"
                                alt=""
                                className="shape shape-1"
                            />
                            <img
                                src="assets/img/about/left-dots.svg"
                                alt=""
                                className="shape shape-2"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content">
                            <div className="section-title mb-30">
                                <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                    Perfect Solution Thriving Online Business
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    dinonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                    sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <a href="javascript:void(0)"
                                className="main-btn btn-hover border-btn wow fadeInUp"
                                data-wow-delay=".6s">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default About1;