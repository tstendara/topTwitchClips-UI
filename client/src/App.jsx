import React from 'react';
import { Container } from 'react-bootstrap';
import Input from './input.jsx'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            game: '',
            range: '',
            links: ''
        }
    }

    render() {
        return(
         <div className="container p-3 my-3 bg-primary text-white">
            <Input />
        </div>

        )
    }
  }

export default App;