import React, {Component} from 'react';
import Cardlist from "./Cardlist";
import SearchBox from './SearchBox';
import { robots } from "./robots";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield:''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value.toLowerCase()});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield)
        });
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
                <Cardlist robots={filteredRobots} /> 
            </div>
        )
    }
}
export default App;