import React, {Component} from 'react'
import Formulaire from '../components/Formulaire'
class Form extends Component {
    
    componentDidMount() {
        // console.log(window)
        // console.log(window.VANTA)
        
            this.effect = window.VANTA.DOTS({
                el: "#trunk",
                backgroundColor: 0x0,
              })
        
    }

    componentWillUnmont() {
        if (this.effect) this.effect.destroy()
    }

    render() {
        return (
            <div id="trunk">
              <Formulaire/>
            </div>
        )
    }
    }

export default Form
