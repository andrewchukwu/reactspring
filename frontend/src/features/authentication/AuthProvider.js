import { createContext, useContext, useMemo } from 'React'
import {useNavigate} from 'react-router-dom'
import {useLocalStorage} from 'features/authentication/useLocalStorage'

// Creating a context to assign to a provider
const AuthContext = createContext