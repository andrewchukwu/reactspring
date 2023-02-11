import React from 'react';

function about2() {
    return <div>
        <section id="about" className="about-section pt-150">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content">
                            <div className="section-title mb-30">
                                <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                    Easy to Use with Tons of Awesome Features
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua.
                                </p>
                            </div>
                            <ul>
                                <li>Quick Access</li>
                                <li>Easily to Manage</li>
                                <li>24/7 Support</li>
                            </ul>
                            <a href="/about"
                                className="main-btn btn-hover border-btn wow fadeInUp"
                                data-wow-delay=".6s">Learn More</a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 order-first order-lg-last">
                        <div className="about-img-2">
                            <img src="themes/saas/assets/img/about/about-2.png" alt="" className="w-100" />
                            <img
                                src="themes/saas/assets/img/about/about-right-shape.svg"
                                alt=""
                                className="shape shape-1"
                            />
                            <img
                                src="themes/saas/assets/img/about/right-dots.svg"
                                alt=""
                                className="shape shape-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default about2;