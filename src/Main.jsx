import React from 'react'
import { Route,Switch } from "react-router";
import App from './App';
// import LoginCard from './LoginCard';
import Play from './Play';
import Laptop from './Laptop';
const Main = () => {
    return (
        <>
            <Switch>
      <Route exact path="/Reacttvapp" component={App} />
      <Route exact path="/" component={App} />
      <Route exact path="/server2" component={Play} />
      <Route exact path="/server3" component={Laptop}/>
      <Route path="*" component={App}/>
    </Switch>
        </>
    )
}

export default Main
