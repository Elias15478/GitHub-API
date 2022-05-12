import axios from 'axios'
import React, {Component} from 'react'
import Repos from './Component/Repos'
import "./App.css" 


class App extends Component {
    constructor() {
        super()
        this.state = ({
            fullName: '',
            email: '',
            userName: '',
            location: '',
            image: '',
            repos: ''       
        })
    }
    componentDidMount() {
        axios.get("https://api.github.com/users/Elias15478?client_id=16c665c2596c2b8782ae&client_secret=76faf062a7671a8be114799470ffac3cd5037863&sort=created")
            .then((response) => {
                console.log(response)
                this.setState({
                    fullName: response.data.name,
                    email: response.data.email,
                    userName: response.data.login,
                    location: response.data.location,
                    image: response.data.avatar_url
                })
            })
            .catch((er) =>{
                console.log('error')
            })
    }
    render() {
        return (
            <div className='App'>
                <div id='profile'>
                    <div className='img'>
                        <img  src={this.state.image} alt='gitImage'></img>
                    </div>
                    <div className='table'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Full Name: <span>{this.state.fullName}</span></th>
                                </tr>
                                <tr>
                                    <th>User Name: <span>{this.state.userName}</span></th>
                                </tr>
                                <tr>
                                    <th>location: <span>{this.state.location}</span></th>
                                </tr>
                                <tr>
                                    <th className='email'>Email Address: <span>{this.state.email}</span></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Repos/>
                
            </div>    
        )
    }
}
export default App