import {BotTesterActionType} from "../action-types/bot-tester.actiontype";

const initialState={
    browser:"",
   

};

export default function BotTesterReducer(state = initialState, action){

    switch(action.type){

        case BotTesterActionType.SET_BROWSER:
            return{
                ...state, browser:action.browser
            };

       

        default:
             return state;
  
    }
}