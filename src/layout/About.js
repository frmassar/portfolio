import React, { Component } from 'react'
import Website from '../components/website'
import '../css/App.css';
// import Bounce from 'react-reveal/Bounce';
 class About extends Component {
    render() {
        return (
            <div className="about">
                <div>
                {/* <Bounce left> */}
                    <h2 className="titreport">PORTFOLIO:</h2>
                {/* </Bounce> */}
                </div>
                <div className="website">
                    <Website/>
                    <div className="rien"></div>
                </div> 
            </div>
        )
    }
}
export default About