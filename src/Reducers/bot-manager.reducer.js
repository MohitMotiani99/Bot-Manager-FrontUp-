import {BotManagerActionType} from "../Action-Types/bot-manager.actiontype";

const initialState={
    botName:"",
    botToken:"",
    botStrategy:"",
    botAlgorithm:"",
    botMsisdn:"",
    botScore:""

};

export default function BotManagerReducer(state = initialState, action){

    switch(action.type){

        case BotManagerActionType.SET_BOT_NAME:
            return{
                ...state, botName:action.botNAme
            };

        case BotManagerActionType.SET_BOT_TOKEN:
            return{
                ...state, botToken:action.botToken
            };

        case BotManagerActionType.SET_BOT_STRATEGY:
            return{
                ...state, botStrategy:action.botStrategy
            };

        case BotManagerActionType.SET_BOT_ALGORITHM:
            return{
                ...state, botAlgorithm:action.botAlgorithm
            };

        case BotManagerActionType.SET_BOT_MSISDN:
            return{
                ...state, botMsisdn:action.botMsisdn
            };

        case BotManagerActionType.SET_BOT_SCORE:
            return{
                ...state, botScore:action.botScore
            };

        default :
            return state;            
    }
}
