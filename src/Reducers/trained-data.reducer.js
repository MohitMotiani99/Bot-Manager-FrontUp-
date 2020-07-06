import {TrainedDataActionType} from "../Action-Types/trained-data.actiontype";

const initialState={
    query:"",
    botIntent:"",
    botScenario:"",
    genResult:new Map()

};

export default function TrainedDataReducer(state = initialState, action){

    switch(action.type){

        case TrainedDataActionType.SET_QUERY:
            return{
                ...state, query:action.query
            };

        case TrainedDataActionType.SET_BOT_INTENT:
            return{
                ...state, botIntent:action.botIntent
            };

        case TrainedDataActionType.SET_BOT_SCENARIO:
            return{
                ...state, botScenario:action.botScenario
            };

        /*
        case TrainedDataActionType.GENERATE:
            return state;


        case TrainedDataActionType.MAP:
            
            return state;
        */

        default:
            return state;
  
    }
    
}