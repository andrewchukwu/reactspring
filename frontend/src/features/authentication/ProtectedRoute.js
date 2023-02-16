import React from "react";
import {Route,Redirect} from "react-router-dom"
import {AuthConsumer} from "./AuthContext"


const ProtectedRoute = () => (
    <AuthConsumer>
        {({isAuth})} =>(

        )}
    </AuthConsumer>

)
  return <div>ProtectedRoute</div>;

export default  ProtectedRoute;