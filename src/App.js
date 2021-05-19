import React from 'react';
import CostForm from "./Components/CostForm/CostForm"
import Menu from "./Components/Menu/Menu"
import Stats from "./Components/Stats/StatisticForm"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App =()=> {
  return (
  <div>
    <Router>
    <Menu/>
    <Switch>
      <Route exact  path="/from" >
        <CostForm/>
      </Route>

      <Route path="/stats">
      <Stats/>  
      </Route>


    </Switch>
    </Router>
  </div>
  );
}

export default App;
