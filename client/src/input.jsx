import React from 'react'
import { Form, Container, Card } from 'react-bootstrap'
import axios from 'axios'
import List from './list.jsx'

export default class input extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            game:"",
            allGames: false,
            range:"",
            links:[]
        }
        this.handleGame = this.handleGame.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // get all games supported 
        // get all ranges supported

        axios.get('http://localhost:5000/supported_games')
            .then(res => {
                this.setState(state =>
                    ({allGames: res.data}))
            })
            .catch(err => {console.log(err)})
    }

    handleGame(e){
        this.setState({game: e.target.value})
    }

    handleSubmit(e){
        // if anything is default pop up error message for user
        e.preventDefault()
    }

    render(){
        const spacing = <div style = {{ padding: 10 }}/>
       
        return(
            <Container className="container p-3 my-3 bg-dark text-white">
                <h1 className="display-4" style={{textAlign:'center', color:'white'}}>Twitch Video maker</h1>
                {spacing}
                <Form>
                    <div>
                        <select label="Game" value={this.state.game} onChange={this.handleGame} className="form-control">
                            <option>Select Game</option>
                            {this.state.allGames ? 
                                <List allGames={this.state.allGames}/>
                                :
                                <> </>
                            }
                        </select>
                    </div>
                    {spacing}
                    <div>
                        <select label="range" value={this.state.game} onChange={this.handleGame} className="form-control">
                            <option>Select range</option>
                            <option>24hr</option>
                            <option>7d</option>
                            <option>30d</option>
                            <option>All</option>
                        </select>
                    </div>
                    {spacing}
                   
                <div className="pull-right">
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                </div>
                
                </Form>
            </Container>
        )
    }

}