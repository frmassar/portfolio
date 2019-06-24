import React, { Component } from 'react';
import '../css/App.css'
class Formulaire extends Component {
	render() {
        return (
            <div className="form">
                <div className="formTitle">
                    <p className="formTitleText">Contact</p>
                </div>
                <form >
                    <label htmlFor="">Nom </label>
                    <input className="formName" type="text" name="name" placeholder="Francois"/>
                    <label htmlFor="">Un projet?</label>
                    <textarea type="textarea" name="description" placeholder="Si vous avez un projet à me soumettre, c'est ici..."/>
                    <div className="submitBtnCard">
                    <label htmlFor="">Mail </label>
                    <input className="formName" type="text" name="Mail" placeholder="jl@gmail.com"/>
                        <input type="submit" name="submit"  value="submit"  className="submitBtn"/>
                    </div>
                </form>
            </div>
		)
    }
}

export default Formulaire;