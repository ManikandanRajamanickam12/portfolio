import React from 'react';
import Home from "./component/Home"
import Aboutme from "./component/Aboutme"
import Skills from "./component/Skills"
import Project from "./component/Project"
import Contact from './component/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/aboutme" exact>
            <Aboutme />
          </Route>
          <Route path="/skills" exact>
            <Skills />
          </Route>
          <Route path="/projects" exact>
            <Project />
          </Route>
          <Route exact path="/contact" exact >
            <Contact />
          </Route>
          <Route exact path="/home" exact>
            <Home />
          </Route>
          <Home />



        </Switch>

      </Router>

      {/* <Aboutme id="Aboutme" />
      <Skills id="Skills" />
      <Project id="Project" />
      <Contact id="Contact" /> */}
    </div>
  )
}
export default App;
