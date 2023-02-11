function AppsCard() {
    return (<div className="col-12 col-lg-4">
        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div className="app-card-header p-3 border-bottom-0">
                <div className="row align-items-center gx-3">
                    <div className="col-auto">
                        <div className="app-icon-holder">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-auto">
                        <h4 className="app-card-title">Loans</h4>
                    </div>
                </div>
            </div>
            <div className="app-card-body px-4">

                <div className="intro">Pellentesque varius, elit vel volutpat sollicitudin, lacus quam efficitur augue</div>
            </div>
            <div className="app-card-footer p-4 mt-auto">
                <a className="btn app-btn-secondary" href="/#">Get pre-approved</a>
            </div>
        </div>
    </div>);
}
export default AppsCard;