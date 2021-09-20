import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom"
import Counter from '../components/Counter'
import Login from '../components/Login'
import Navbar from '../components/Navbar'



const AppRouter = () => {
    return (
       <Router>
           <Navbar />
           <Switch>
               <Route exact path='/' component={Counter}/>
               <Route exact path='/login' component={Login}/>
           </Switch>
       </Router>
       )
}

export default AppRouter
