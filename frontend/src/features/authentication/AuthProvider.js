import { createContext, useContext, useMemo } from 'React'
import {useNavigate} from 'react-router-dom'
import {useLocalStorage} from 'features/authentication/useLocalStorage'

// Creating a context to assign to a provider
const AuthContext = createContext();

class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor()
  {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(){

  }
  logout(){

  }

  render() {
    return (
      <AuthContext.Provider
        value={{ 
            isAuth: this.state.isAuth ,
            login:this.login,
            logout:tihs.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
const AuthConsumer = AuthContext.Consumer
export { AuthProvider, AuthConsumer }