import React, {Component} from 'react';
import '../css/App.css';
import AnimName  from '../components/AnimName'
import Separation from '../components/Separation'
import Description from '../components/description'
// import Separationwebst from '../components/Separationwebst'
class Main extends Component {
    
render()
{
    return (
    
        <div className="Main">
            <div className="head">
                <div className="anim">
                    <AnimName></AnimName>
                </div>
            </div>
            <div className="description">
                <Description></Description>
            </div>
            {/* <Separation></Separation> */}
            {/* <div className="separationwbst">
                <Separationwebst/>
            </div> */}
        </div>

);}
}
export default Main;
