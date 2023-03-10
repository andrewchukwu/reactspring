import React from 'react';

function header() {
    return <div>
        <header className="header">
            <div className="navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img src="/themes/saas/assets/img/logo/logo.svg" alt="Logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="page-scroll active" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#features">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#about">About</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="page-scroll" href="#why">Why</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0)">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0)">Clients</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="javascript:void(0)" className="bold">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
}
export default header;