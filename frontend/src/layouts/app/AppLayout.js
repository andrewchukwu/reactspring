import { Outlet } from "react-router-dom";

import Header from "layouts/Header";
import Content from "layouts/Content";
import WelcomeBanner from 'pages/apphome/components/WelcomeBanner';
import Footer from 'layouts/Footer';


const AppLayout = () => {
    return (  
        <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="app-page-title">Overview</h1>
                    <Header/>
                    <WelcomeBanner></WelcomeBanner>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default AppLayout;