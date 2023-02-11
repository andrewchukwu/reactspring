import Header from "../../../theme/portaltheme/layout/Header";
import Content from "../../../theme/portaltheme/layout/Content";
import { Outlet } from "react-router-dom";

const FullPageLayout = () => {
    return (  
        <div>
            <header>
                <h2>Full Page Layout</h2>
            </header>
            <main>
            <Outlet/>
            </main>
        </div>
    );
}
 
export default FullPageLayout;