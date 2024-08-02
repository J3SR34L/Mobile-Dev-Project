import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home';
import SignUp from '../app/SignUp';
import StartPage from '../app/StartPage';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {StartPage} title = "" initial = {true} />
         <Scene key = "signup" component = {SignUp} title = "" />
      </Scene>
   </Router>
)
export default Routes