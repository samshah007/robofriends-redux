import React, { Component} from 'react';
import { connect } from 'react-redux';
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBountry from '../components/ErrorBountry';
import { setSearchField, requestRobots } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots:() => dispatch(requestRobots())
    }
}
class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }
    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField)
        });
        return (isPending) ?
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
}
export default connect(mapStateToProps,mapDispatchToProps)(App);