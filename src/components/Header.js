import React from 'react'
import {Link} from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      julien: false
    }

  }

  handleStateChange (state) {
    this.setState({julien: state.isOpen})  
  }  


 francois(){
   this.setState({
     julien: false,
   })

   console.log(this.state.julien)
   
 };

  showSettings (event) {
    event.preventDefault();
  };

  render () {
    return (
      
        <Menu  onStateChange={(state) => this.handleStateChange(state)} isOpen={this.state.julien} right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <Link onClick={() => this.francois()} id="home" className="menu-item" to="/">Home</Link>
            <Link onClick={() => this.francois()} id="about" className="menu-item" to="/about">About</Link>
            <Link onClick={() => this.francois()} id="contact" className="menu-item" to="/form">Contact</Link>
        </Menu>
    );
  }
}
export default Header