import React, {Component} from 'react';
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

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
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield)
        });
        return (!robots.length) ?
            (<div className="tc"><h1>Loading...</h1></div>):
            (
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
export default App;