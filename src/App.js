import React ,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import  Payment  from './Payment.js';
function App() {
  const [{ user } , dispatch]= useStateValue()

  useEffect(()=>
  {
    
   auth.onAuthStateChanged((authuser)=>
    {
      if(authuser)
      {
          dispatch(
          {  type:"SET_USER",
            user:authuser}
          )
      }
      else
      {
        dispatch(
          {  type:"SET_USER",
            user:null}
          )
      }
    })
   
  },[user])

  

  return (
    <Router>

    <div className="App">
      <Switch>
        <Route exact path="/checkout">
        <Header/>
        <Checkout/>
         
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>


        <Route path="/payment/:price">
         <Payment/>
        
        </Route>

        <Route path="/">
         <Header/>
         <Home/>
         </Route>
        
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
