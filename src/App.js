import React from 'react';
import './css/App.css';
import Header from './components/Header'
import Form from './layout/Form'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './layout/Main'

// import Image from './components/image'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header pageWrapId={ "page-wrap" } outerContainerId={ "App" }></Header>
        <div id="page-wrap">
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/form" component={Form}/>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
