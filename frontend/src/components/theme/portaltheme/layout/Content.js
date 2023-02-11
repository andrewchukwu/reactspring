import WelcomeBanner from '../page/elements/WelcomeBanner';
import StatsBar from '../page/elements/StatsBar';
import ProgressProjects from '../page/elements/overview/ProgressProjects';
import StatsListReport from '../page/elements/overview/StatsListReport';
import LineChartExample from '../page/elements/overview/LineChartExamples'
import BarChartExample from '../page/elements/overview/BarChartExample';
import InvoicesCard from '../page/elements/overview/InvoicesCard';
import AppsCard from '../page/elements/overview/AppsCard';
import ToolsCard from '../page/elements/overview/ToolsCard';
import Footer from '../layout/Footer';

const Content = () => {
    return (
        <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="app-page-title">Overview</h1>
                    <WelcomeBanner></WelcomeBanner>
                    <StatsBar />
                    <div className="row g-4 mb-4">
                        <LineChartExample/>
                        <BarChartExample/>
                    </div>

                    <div className="row g-4 mb-4">
                        <ProgressProjects />
                        <StatsListReport />
                    </div>

                    <div className="row g-4 mb-4">
                        <InvoicesCard/>
                        <AppsCard/>
                        <ToolsCard/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Content;