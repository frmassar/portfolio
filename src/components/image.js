import React, { PureComponent } from 'react'
import photo from '../assets/_DSC4522.JPG'
 class image extends PureComponent {
    render() {
        return (
            <div>
                <img className ="photo" src= {require(photo)} alt="moi"/>
            </div>
        )
    }
}
export default image;
