import React from 'react'
import { authReducer , initialState} from '../reducers/authReducer'
import {login, logout} from '../actions/authAction'
import { useReducer } from 'react'

const Login = () => {
    const [state, dispatch] = useReducer(authReducer,initialState)
    return (
        <div>
        <h1>Login</h1>
        <hr />
        <p>
            {state.name}
            {state.uid}
        </p>
        <button 
            className="btn btn-primary" 
            onClick={()=>dispatch(login('12345', 'Alexis Rave'))}
        >
            Login
        </button>
    </div>
    )
}

export default Login
