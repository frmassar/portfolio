import React, { Component } from 'react'
import {card} from './card'
import Carddetail from './carddetail'

export default class Website extends Component {
    render() {

        const CardsDisplay= card.map( (card)=>{
            return(  <Carddetail
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
