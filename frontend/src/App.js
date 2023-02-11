import {
    createBrowserRouter,
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import Content from './components/theme/portaltheme/layout/Content';
import Header from './components/theme/portaltheme/layout/Header';
import ApplicationRoutes from './components/view/core/routes/ApplicationRoutes'

import Home from './components/view/core/Home'
import About from './components/view/core/About'
import Contact from './components/view/core/Contact'
import RoutesLayout from './components/view/core/routes/RoutesLayout';
import FullPageLayout from './components/view/core/routes/FullPageLayout';
import NotFound from './components/view/core/NotFound';


//import './App.css';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route exact path="/">
            <Route index ath="" element={<Home/>}/>
            <Route path="app" element={<RoutesLayout/>}>
                <Route index  element={< Content />}/>
                <Route path='about' element={< About />}/>
                <Route path='contact' element={< Contact />}/>
            </Route>
            <Route path="auth" element={<FullPageLayout/>}>
                <Route path="login" element={< About />}/>
                <Route path="register"/>
                <Route path="forgotpassword"/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
);

function App() {

    let headerComponent = <Header/>
    let contentComponent = <Content/>

    return (
        <RouterProvider router={router}/>

    );
}
export default App;