import React, {Component} from 'react';
import './css/App.css';
import Header from './components/Header'
import Form from './layout/Form'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './layout/Main'
import About from './layout/About'

// import Image from './components/image'
class App extends Component {


render()
{
  return (
    <BrowserRouter>

      <div id="App">
        <Header pageWrapId={ "page-wrap" } outerContainerId={ "App" }></Header>
        <div id="page-wrap">
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/form" component={Form}/>
              <Route path="/about" component={About}/>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
}



export default App;
