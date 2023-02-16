function StatsBar() {
    return (<div className="row g-4 mb-4">
        <div className="col-6 col-lg-3">
            <div className="app-card app-card-stat shadow-sm h-100">
                <div className="app-card-body p-3 p-lg-4">
                    <h4 className="stats-type mb-1">Current Score</h4>
                    <div className="stats-figure">818</div>
                    <div className="stats-meta text-success">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg> 4%
                    </div>
                </div>
                <a className="app-card-link-mask" href="/">|</a>
            </div>
        </div>

        <div className="col-6 col-lg-3">
            <div className="app-card app-card-stat shadow-sm h-100">
                <div className="app-card-body p-3 p-lg-4">
                    <h4 className="stats-type mb-1">Credit Utilization</h4>
                    <div className="stats-figure">44%</div>
                    <div className="stats-meta text-success">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg> 5% </div>
                </div>
                <a className="app-card-link-mask" href="/#">|</a>
            </div>
        </div>
        <div className="col-6 col-lg-3">
            <div className="app-card app-card-stat shadow-sm h-100">
                <div className="app-card-body p-3 p-lg-4">
                    <h4 className="stats-type mb-1">Total Credit</h4>
                    <div className="stats-figure">£23,000</div>
                    <div className="stats-meta">
                        Borrowings</div>
                </div>
                <a className="app-card-link-mask" href="/#">|</a>
            </div>
        </div>
        <div className="col-6 col-lg-3">
            <div className="app-card app-card-stat shadow-sm h-100">
                <div className="app-card-body p-3 p-lg-4">
                    <h4 className="stats-type mb-1">Total Mortgages</h4>
                    <div className="stats-figure">£323,134</div>
                    <div className="stats-meta">Secured borrowings</div>
                </div>
                <a className="app-card-link-mask" href="/#">|</a>
            </div>
        </div>
    </div>);
}
export default StatsBar;