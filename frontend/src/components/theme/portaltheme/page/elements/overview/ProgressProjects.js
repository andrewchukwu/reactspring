function ProgressProjects() {
    return (<div className="col-12 col-lg-6">
        <div className="app-card app-card-progress-list h-100 shadow-sm">

            <div className="app-card-header p-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <h4 className="app-card-title">Progress</h4>
                    </div>
                    <div className="col-auto">
                        <div className="card-header-action">
                            <a href="/#">All projects</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-card-body">
                <div className="item p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="title mb-1 ">Project lorem ipsum dolor sit amet</div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{
                                    "width":"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <a className="item-link-mask" href="/#">|</a>
                </div>
                <div className="item p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="title mb-1 ">Project duis aliquam et lacus quis ornare</div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{
                                    "width": "34%"
                                }} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <a className="item-link-mask" href="/#">|</a>
                </div>

                <div className="item p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="title mb-1 ">Project sed tempus felis id lacus pulvinar</div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{
                                    "width": "68%"
                                }} aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <a className="item-link-mask" href="/#">|</a>
                </div>

                <div className="item p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="title mb-1 ">Project sed tempus felis id lacus pulvinar</div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{
                                    "width": "52%"
                                }} aria-valuenow="52" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <a className="item-link-mask" href="/">|</a>
                </div>
            </div>
        </div>
    </div>);
}
export default ProgressProjects;