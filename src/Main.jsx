import React from 'react'
import { Route,Switch } from "react-router";
import App from './App';
import LoginCard from './LoginCard';
import Play from './Play';
const Main = () => {
    return (
        <>
            <Switch>
      <Route exact path="/Reacttvapp" component={App} />
      <Route exact path="/" component={LoginCard} />
      <Route exact path="/server2" component={Play} />
      
    </Switch>
        </>
    )
}

export default Main
