import React from 'react'
import { Route,Switch } from "react-router";
import App from './App';
// import LoginCard from './LoginCard';
import Play from './Play';
import Laptop from './Laptop';
import Movies from './Movies'
const Main = () => {
    return (
        <>
            <Switch>
      <Route exact path="/Reacttvapp" component={Play} />
      <Route exact path="/" component={Play} />
      <Route exact path="/server2" component={Laptop} />
      {/* <Route exact path="/server3" component={Laptop}/> */}
      {/* <Route exact path="/Movies" component={Movies}/> */}

      <Route path="*" component={App}/>
    </Switch>
        </>
    )
}

export default Main
