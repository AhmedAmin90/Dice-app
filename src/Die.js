import React , {Component} from 'react'
import './Die.css'

class Die extends Component {

    render() {
        return (
            <i className={`fas fa-dice-${this.props.face} ${this.props.rolling ? 'Rolldice-rolling' : ''}`}></i>            
        )
    }

}

export default Die;