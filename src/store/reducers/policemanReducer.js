import {
    CALL_SUBMITTED,
    CALLS_LOADED,
    INFO_LOADED,
    SEARCH_COMPLETED,
} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function policemanReducer(state = initialState, action){
    switch(action.type){
        case INFO_LOADED:{
            let loadedInfo = JSON.parse(action.payload);
            console.log(loadedInfo);
            let info = {
                salary: loadedInfo.salary,
                rank: loadedInfo.rank,
                status: loadedInfo.status,
                p_station: loadedInfo.policeStation.name,
                name: loadedInfo.person.name,
                surname: loadedInfo.person.surname,
                jabber: loadedInfo.jabber,
                email: loadedInfo.user.email,
                historyOfWork: loadedInfo.workExperiences
            };
            console.log(info);
            return {...state, info: info};
        }
        case CALLS_LOADED:{
            let loadedCalls = JSON.parse(action.payload);
            console.log(loadedCalls);
            let calls = [];
            for(let i=0; i<loadedCalls.length; i++){
                let call = loadedCalls[i];
                calls.push({
                    description: call.description,
                    time: call.time,
                    status: call.status === "ACTIVE"
                })
            }
            console.log(calls);
            return {...state, calls: calls};
        }
        case CALL_SUBMITTED:{
            return {...state, message: action.payload};
        }
        case SEARCH_COMPLETED:{
            let loadedHumans = JSON.parse(action.payload);
            console.log(loadedHumans);
            let humans = [];
            for(let i=0; i<loadedHumans.length; i++){
                let human = loadedHumans[i];
                humans.push({
                    name: human.name + human.surname,
                    p_number: human.passportNumber,
                    location: human.registrationLocation.street + human.registrationLocation.houseNumber + human.registrationLocation.district.name
                })
            }
            console.log(humans);
            return {...state, humans: humans};
        }
        default:
            return state;
    }
}