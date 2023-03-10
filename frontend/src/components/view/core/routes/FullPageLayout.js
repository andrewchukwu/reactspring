import { Outlet } from "react-router-dom";

import Header from "layouts/Header";
import Content from "layouts/Content";


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