import { Outlet } from "react-router-dom";

import Header from "layouts/Header";
import Content from "layouts/Content";

const RoutesLayout = () => {
    return (  
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}
 
export default RoutesLayout;