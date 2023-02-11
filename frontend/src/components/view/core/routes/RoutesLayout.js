import Header from "../../../theme/portaltheme/layout/Header";
import Content from "../../../theme/portaltheme/layout/Content";
import { Outlet } from "react-router-dom";

const RoutesLayout = () => {
    return (  
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}
 
export default RoutesLayout;