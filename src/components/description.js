import React, { PureComponent } from 'react'
import Bounce from 'react-reveal/Bounce';
import {Link} from 'react-router-dom'
export default class description extends PureComponent {
    render() {
        return (
            
            <div>
                <Bounce left>
                    <h2> Young junior web developer, fascinated</h2> 
                    <h2> by design and web development</h2>
                    <h2>Here is my portfolio with all my work,</h2>
                    <Link onClick={() => this.francois()} id="about" className="in" to="/about"><h2 className="animated-box in">enjoy the visit.</h2></Link>
                         
                </Bounce>
            </div>
        )
    }
}
