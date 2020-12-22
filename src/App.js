import React, {Component} from 'react';
import Cardlist from "./Cardlist";
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value.toLowerCase()});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield)
        });
        if(this.state.robots.length === 0){
            return <div className="tc"><h1>Loading...</h1></div>
        }else{
            return (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
                    <Scroll>
                        <Cardlist robots={filteredRobots} /> 
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;