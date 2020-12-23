import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from "./constants";

const initialStateSearch = {
    searchField:''
}

export const searchRobots = (state=initialStateSearch,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField:action.payload});
        default:
            return state;
    }
}

const initialStateRobot = {
    robots:[],
    isPending:false,
    error:''
}
export const requestRobots = (state=initialStateRobot,action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDDING:
            return Object.assign({}, state, {isPending:true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots:action.payload, isPending:false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error:action.payload,isPending:false});
        default:
            return state;
    }
}