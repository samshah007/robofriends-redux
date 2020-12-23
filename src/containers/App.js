import React, { useState, useEffect} from 'react';
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBountry from '../components/ErrorBountry';

function App() {
    /* constructor(){
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
    } */
    const [robots,setRobots] = useState([]);
    const [searchfield,setSearchfiled] = useState('');

    const onSearchChange = (event) => {
        //this.setState({searchfield:event.target.value.toLowerCase()});
        setSearchfiled(event.target.value.toLowerCase());
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[])
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield)
    });
    return (!robots.length) ?
        (<div className="tc"><h1>Loading...</h1></div>):
        (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox onSearchChange={onSearchChange}></SearchBox>
                <Scroll>
                    <ErrorBountry>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBountry> 
                </Scroll>
            </div>
        );
    
}
export default App;