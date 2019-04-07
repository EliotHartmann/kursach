import {
    STATS_LOADED,
    USER_INFO_LOADED
} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function userReducer(state = initialState, action){
    switch(action.type){

        case STATS_LOADED:{
            let loadedStats = JSON.parse(action.payload);
            let stats = [];
            for(let i=0; i<loadedStats.length; i++){
                let stat = loadedStats[i];
                stats.push({
                    name: stat.name,
                    area: stat.area,
                    crimeNumber: stat.crimeNumber,
                    population: stat.population
                })
            }
            console.log(stats);
            return {...state, stats: stats}
        }
        default:
            return state;
    }
}