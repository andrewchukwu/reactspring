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

import Header from 'layouts/Header';
import ApplicationRoutes from 'components/view/core/routes/ApplicationRoutes'

import Home from 'pages/home/Home'
import About from 'pages/about'
import Contact from 'pages/contact'
import FullPageLayout from 'layouts/app/FullPageLayout';
import NotFound from 'pages/notfound/NotFound';




import AppLayout from 'layouts/app/AppLayout';
import Content from 'layouts/Content';
import AppHomePage from 'pages/apphome/Home';


import Documents from 'pages/documents';
import Orders from 'pages/orders';
import Notifications from 'pages/notifications';
import Account from 'pages/account'
import Settings from 'pages/settings';

import Login from 'pages/auth/login';
import Signup from 'pages/auth/signup';
import ResetPassword from 'pages/auth/reset-password';

import SpringBoost from 'pages/products/springboost'



//import './App.css';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index path="" element={<Home/>}/>
            <Route index path="home" element={<Home/>}/>
            <Route path='404' element={< NotFound />}/>

            <Route path="app" element={<AppLayout/>}>

                <Route path="products">
                    <Route path='springboost' element={< SpringBoost />}/>
                    <Route path='creditcards' element={< Documents />}/>
                    <Route path='loans' element={< Documents />}/>
                    <Route path='carfinance' element={< Documents />}/>
                    <Route path='mortgages' element={< Documents />}/>
                </Route>
                <Route index element={< AppHomePage />}/>
                <Route path='documents' element={< Documents />}/>
                <Route path='orders' element={< Orders />}/>

                <Route path='notifications' element={< Notifications />}/>
                <Route path='account' element={< Account />}/>
                <Route path='settings' element={< Settings />}/>


                <Route path='documents' element={< Documents />}/>
                <Route path='about' element={< About />}/>
                <Route path='contact' element={< Contact />}/>

            </Route>
            <Route path="auth" element={<FullPageLayout/>}>
                <Route path="login" element={< Login />}/>
                <Route path="signup" element={< Signup />}/>
                <Route path="reset-password" element={< ResetPassword />}/>
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