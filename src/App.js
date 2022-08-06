import React, { Component } from 'react'
import Navbars from './Components/Navbars'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home"
import Tbl from "./Components/Tbl";


export default class App extends Component {
 
  render() {
    return (
     <>
     <Router>
     <Navbars />
       <Switch>
         <Route path='/' children={Home} exact> <Home/> </Route>
       </Switch>
       <Tbl />
     </Router>
     </>
    )
  }

}
