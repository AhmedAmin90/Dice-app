import React , {Component} from 'react'
import Die from './Die'
import './Rolldice.css'

class Rolldice extends Component {
    state = {
        diceOne: 'one',
        diceTwo: 'one'
    }

    changeNumber = (e) => {
        let randomNumberOne = Math.floor(Math.random()*6)+1;
        let randomNumberTwo = Math.floor(Math.random()*6)+1;
        let arr = ['one' , 'two' , 'three' , 'four' , 'five' , 'six'];
        for (let i = 0 ; i <= arr.length+ 1 ; i++) {
            if (randomNumberOne === arr.indexOf(arr[i]) + 1 ) {
                randomNumberOne = arr[i]
            } ;
            if (randomNumberTwo === arr.indexOf(arr[i]) + 1 ) {
                randomNumberTwo = arr[i]
            }
        }
        
        this.setState({diceOne: randomNumberOne , diceTwo: randomNumberTwo})
    }

    // static defaultProps = {
    //     face: ['one' , 'two' , 'three' , 'four' , 'five' , 'six']
    // }

    render() {
        return (
            <div className="Rolldice">
                <div> 
                    <Die face={this.state.diceOne}/>
                    <Die face={this.state.diceTwo}/>
                </div>
                <button onClick={this.changeNumber} className="Rolldice-btn">Roll Dice</button>
            </div>
            
        )
    }
}



// To show all the diceFaces:
// {this.props.face.map(f => 
//     <Die 
//       face={f}                         
//     /> )}   


export default Rolldice;