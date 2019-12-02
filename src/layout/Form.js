import React, {Component} from 'react'
import Formulaire from '../components/Formulaire'
import {base} from '../Base';
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            form: [],
            isHidden:false
        }
    }

    addForm(e){
        e.preventDefault();
        let arraySend = this.state.form;
        arraySend.push({
            id          : Date.now(),
            name        :e.target.name.value,
            email       :e.target.email.value,
            num         :e.target.num.value,
            message     :e.target.message.value
        });
        this.setState({
            form:arraySend,
            isHidden:true,
        }, ()=>{
            console.log(this.state.data)
        })      
        console.log(this.state.data)
        // console.log(this.state.isHidden)
    }


    componentDidMount() {
        this.firebase = base.syncState('form', {
            context: this,
            state: 'form',
            asArray: true,
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.firebase);
    }

    render() {
        console.log(this.props)
        return (
                <Formulaire
                    addForm={this.addForm.bind(this)}
                    isHidden={this.state.isHidden}
                    history={this.props.history}
                />
        )
    }
    }

export default Form
