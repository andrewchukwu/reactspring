import React from 'react';

function hero() {
    return <div>
        <section id="home" class="hero-section">
            <div class="container">
                <div class="row align-items-center position-relative">
                    <div class="col-lg-6">
                        <div class="hero-content">
                            <h1 class="wow fadeInUp" data-wow-delay=".4s">
                                Spring CRA <br/>Your new Credit Reporting Application
                            </h1>
                            <p class="wow fadeInUp" data-wow-delay=".6s">
                                Spring CRA - The best Credit Reporting Application online
                            </p>
                            <a href="javascript:void(0)" class="main-btn border-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Register Now</a
                            >
                            <a href="#features" class="scroll-bottom">
                                <i class="lni lni-arrow-down"></i
                                ></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                            <img src="themes/saas/assets/img/hero/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default hero;