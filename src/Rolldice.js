import React , {Component} from 'react'
import Die from './Die'
import './Rolldice.css'

class Rolldice extends Component {
    state = {
        diceOne: 'one',
        diceTwo: 'one',
        rolling: false,
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
        
        this.setState({diceOne: randomNumberOne , diceTwo: randomNumberTwo , rolling:true});
        setTimeout(()=> {
            this.setState({rolling: false})
        },1000)
    }

    render() {
        return (
            <div className="Rolldice">
                <div> 
                    <Die face={this.state.diceOne} rolling={this.state.rolling}/>
                    <Die face={this.state.diceTwo} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.changeNumber} className="Rolldice-btn" disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling ...' : "RollDice "}
                </button>
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