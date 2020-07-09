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
            curlink: '',
            links:[]
        }
        this.handleGame = this.handleGame.bind(this);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
        this.handleRange = this.handleRange.bind(this);
        this.handleCurLink = this.handleCurLink.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }

    componentDidMount(){
        // get all games supported 
        // get all ranges supported

        axios.get('http://localhost:5000/supported_games')
            .then(res => {
                let data = res.data
                this.setState(state =>
                    ({allGames: data, game:data[0]}))
            })
            .catch(err => {console.log(err)})
    }

    handleGame(e){
        this.setState({game: e.target.value})
    }

    handleRange(e){
        this.setState({range: e.target.value})
    }

    handleCurLink(e){
        this.setState({curlink: e.target.value})
    }

    handleLinkSubmit(e){
        e.preventDefault()
        let allLinks = this.state.links
        allLinks.push(this.state.curlink)   // push cur link instead
        // validate this.state.curlink to make sure 
        this.setState({links: allLinks, curlink: ""})
    }
    
    handleFormSubmission(){
        e.preventDefault()
        // handle form submission post 

    }

    render(){
        const spacing = <div style = {{ padding: 10 }}/>
        const Lspacing = <div style = {{ paddingLeft: 10 }}/>

        return(
            <Container className="container p-3 my-3 bg-dark text-white">
                <h1 className="display-4" style={{textAlign:'center', color:'white'}}>Twitch Video maker</h1>
                {spacing}
                <Form>
                    <div>
                        <select label="Game" value={this.state.game} onChange={this.handleGame} className="form-control">
                            {/* <option>Select Game</option> */}
                            {this.state.allGames ? 
                                <List allGames={this.state.allGames}/>
                                :
                                <> </>
                            }
                        </select>
                    </div>
                    {spacing}
                    <div>
                        <select label="range" value={this.state.range} onChange={this.handleRange} className="form-control">
                            <option>Select range</option>
                            <option>24hr</option>
                            <option>7d</option>
                            <option>30d</option>
                            <option>All</option>
                        </select>
                    </div>
                    {spacing}

                    <input value={this.state.curlink} onChange={this.handleCurLink} placeholder="(Optional) Enter Twitch Links"/>
                    
                    {Lspacing}
                    <button type="button" className="btn btn-outline-primary" onClick={this.handleLinkSubmit}  >add</button>
                    {spacing}
                <div className="pull-right">
                    <button onClick={this.handleFormSubmission} type="button" className="btn btn-outline-primary">Primary</button>
                </div>
                
                </Form>
            </Container>
        )
    }

}