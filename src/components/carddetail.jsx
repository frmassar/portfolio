import React, { Component } from 'react'
import '../css/App.css'
export default class Carddetail extends Component {
    constructor(props){
        super (props)
        this.handleHover = this.handleHover.bind(this);
        this.state={
            hover:false,
            titre:false
        } 
    }

    handleHover(){
        this.setState({
            hover: !this.state.hover
        })
        console.log(this.state.hover)
    }

    showDescr(){
        if(this.state.hover){

            return(
                <div>
                    <div className="imgsite" style={{ backgroundImage: "url("+this.props.card.image+")", backgroundSize: "cover", opacity:0.5}}>
                    </div>
                    <div className="titresite">
                        {this.props.card.titre}
                        <p>by the big François Massart</p>
                    </div>
                </div>
            )
        }else{ 
            return <div className="imgsite" style={{ backgroundImage: "url("+this.props.card.image+")", backgroundSize: "cover" }}></div>
        }
    
    }
    render() {
        return (
        <a href={this.props.card.lien}>        
            <div className="card"
                onMouseEnter={this.handleHover} 
                onMouseLeave={this.handleHover}
                
            >
                {this.showDescr()}
            </div>
        </a>    
        )
    }
}
