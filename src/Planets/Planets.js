import {Component} from 'react';

class Planets extends Component{

    state = {
        Previousplanet: 0,
        Currentplanet: 4,
        Nextplanet: 0,
       planets: {
            1: 'MERCURY',
            2: 'VENUS',
            3: 'EARTH',
            4: 'MARS',
            5: 'JUPITER',
            6: 'SATURN',
            7: 'URANUS',
            8: 'NEPTUNE',
            9: 'PLUTO'
        },
        score: 0,
        result1: '',
        result2: ''
    }

    randomNumber = () => {
        let randomNumber = parseInt(Math.random() * 10);
        while( randomNumber <= 1 || randomNumber >= 9 || randomNumber == this.state.Currentplanet ) {
            randomNumber = parseInt(Math.random() * 10);
        }
        return randomNumber;
    }

    handleOnPreviousplanetSelectChange = (event) => {
        this.setState({
            Previousplanet: parseInt(event.target.value)
        });
    }

    handleOnNextplanetSelectChange = (event) => {
        this.setState({
            Nextplanet: parseInt(event.target.value)
        });
    }


    handleSubmit = (event) => {
       let points = 0;

        if (this.state.Previousplanet + 1 === this.state.Currentplanet) {
            points++;
            this.setState({
                // score: this.state.score + 1,
                result1: "Previousplanet is correct"
            })
        } else {
            this.setState({
                result1: "Previousplanet is wrong"
            })
        }

        if (this.state.Nextplanet - 1 === this.state.Currentplanet) {
            points++;
            this.setState({
                // score: this.state.score + 1,
                result2: "Nextplanet  is correct"
            })
         } else {
            this.setState({
                result2: "Nextplanet is wrong"
            })
        }
        this.setState({
            score:this.state.score + points
        })

        let newQuestion = this.randomNumber();
        this.setState({
            Currentplanet: newQuestion
        })
    }

    handleReset = (event) => {
        let newQuestion = this.randomNumber();
        this.setState({
            Currentplanet: newQuestion
        })
    }

    
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Previousplanet</th>
                            <th>Currentplanet</th>
                            <th>Nextplanet</th>
                        </tr>

                        <tr>
                            <td>
                                <select value={this.state.Previousplanet} onChange={this.handleOnPreviousplanetSelectChange} >
                                    <option value='0'>Select Answer</option>
                                    <option value='3'>EARTH</option>
                                    <option value='8'>NEPTUNE</option>
                                    <option value='6'>SATURN</option>
                                    <option value='7'>URANUS</option>
                                    <option value='2'>VENUS</option>
                                    <option value='1'>MERCURY</option>
                                    <option value='4'>MARS</option>
                                    <option value='9'>PLUTO</option>
                                    <option value='5'>JUPITER</option>
                                </select>
                            </td>
                            <td>
                               {this.state.planets[this.state.Currentplanet]}
                            </td>
                            <td>
                                <select value={this.state.Nextplanet} onChange={this.handleOnNextplanetSelectChange}>
                                    <option value='0'>Select Answer</option>
                                    <option value='6'>SATURN</option>
                                    <option value='1'>MERCURY</option>
                                    <option value='7'>URANUS</option>
                                    <option value='2'>VENUS</option>
                                    <option value='8'>NEPTUNE</option>
                                    <option value='5'>JUPITER</option>
                                    <option value='9'>PLUTO</option>
                                    <option value='4'>MARS</option>
                                    <option value='3'>EARTH</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='3'>
                            <button onClick={this.handleSubmit}>Submit</button>
                            <button onClick={this.handleReset}>Reset</button></td>
                        </tr>
                        <tr>
                            <td colSpan='3'> <div>Your Score: {this.state.score}</div> 
                            <div>Last Question Result: {this.state.result1} &amp; {this.state.result2} </div> </td>
                        </tr>

                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Planets; 