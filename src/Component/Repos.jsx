import axios from 'axios';
import React, {Component} from 'react';
import ReposLists from './ReposLists';



class Repos extends Component {
    constructor() {
        super()
        this.state = ({
            reposLists: []    
        })
    }
    componentDidMount() {
        axios.get("https://api.github.com/users/Elias15478/repos?client_id=16c665c2596c2b8782ae&client_secret=76faf062a7671a8be114799470ffac3cd5037863&sort=created")
            .then((response) => {
                console.log(response)
                this.setState({
                    reposLists: response.data
                })
            })
            .catch((er) =>{
                console.log('error')
            })
    }
    render() {
        return (
            <div className='Repos'>
                <div>
                    <div>
                        <h4>User Repositories</h4>
                    </div>
                            {
                            this.state.reposLists.map((x, index) => {
                                return (
                                    <div key={index}>
                                        <ReposLists x={x} index={index}/>
                                    </div>
                                )
                            })
                        }  
                    
                </div> 
            </div>   
        )
    }
}
export default Repos