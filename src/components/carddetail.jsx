import React, { useState } from 'react'
import '../css/App.css'

const Carddetail = ({card}) => {
    const [ hover, setHover ] = useState(false)
    const [ titre, setTitre ] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    const showDescr = () => {
        if(hover){
            return(
                <div>
                    <div className="imgsite" style={{ backgroundImage: "url("+card.image+")", backgroundSize: "cover", opacity:0.5}}>
                    </div>
                    <div className="titresite">
                        {card.titre}
                        <p>by François Massart</p>
                    </div>
                </div>
            )
        }else{ 
            return <div className="imgsite" style={{ backgroundImage: "url("+card.image+")", backgroundSize: "cover" }}></div>
        }
    }

    return (
        <a href={card.lien}>        
            <div className="card"
                onMouseEnter={() => handleHover()} 
                onMouseLeave={() => handleHover()}
            >
                {showDescr()}
            </div>
        </a>    
    )
}

export default Carddetail
