import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// export default class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 <div className="button">
//                     <Link className="lienroute" to="/form"><h2>ABOUT</h2></Link>
//                 </div>
//                 <div className="button">
//                     <h2>CONTACT</h2>
//                 </div>
//                 <div className="button">
//                     <Link className="lienroute" to="/"><h2>MAIN</h2></Link>
//                 </div>
//             </div>
//         )
//     }
// }



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
            <Link onClick={() => this.francois()} id="about" className="menu-item" to="/form">About</Link>
            <Link onClick={() => this.francois()} id="contact" className="menu-item" to="/">Contact</Link>
        </Menu>
    );
  }
}
export default Header