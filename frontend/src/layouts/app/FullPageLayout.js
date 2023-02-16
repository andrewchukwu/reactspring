import Header from "layouts/Header";
import Content from "layouts/Content";
import { Outlet } from "react-router-dom";

const FullPageLayout = () => {
    return (  
        <div>
            <header>
            </header>
            <main>
            <Outlet/>
            </main>
        </div>
    );
}
 
export default FullPageLayout;