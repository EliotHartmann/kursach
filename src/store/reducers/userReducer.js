import {
    STATS_LOADED,
    USER_INFO_LOADED
} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function userReducer(state = initialState, action){
    switch(action.type){
        case USER_INFO_LOADED:{
            let loadedUserInfo = JSON.parse(action.payload);
            let userInfo = {
                username: loadedUserInfo.username,
                email: loadedUserInfo.email
            };
            return {...state, userInfo: userInfo}
        }
        case STATS_LOADED:{
            let loadedStats = JSON.parse(action.payload);
            let stats = [];
            for(let i=0; i<loadedStats.length; i++){
                let call = loadedStats[i];
                stats.push({
                    name: call.name,
                    area: call.area,
                    crimeNumber: call.crimeNumber,
                    population: call.population
                })
            }
            console.log(stats);
            return {...state, stats: stats}
        }
        default:
            return state;
    }
}