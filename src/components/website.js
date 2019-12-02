import React, { Component } from 'react'
import {card} from './card'
// import Carddetail from './carddetail'
import Tdcard from './Tdcard'



export default class Website extends Component {
    render() {

        const CardsDisplay= card.map( (card)=>{
            return(  <Tdcard
            key={ card.id }
            card={ card }
            />
            )
        });

        return (
            <div className="projet">
                {CardsDisplay}
            </div>
        )
    }
}
