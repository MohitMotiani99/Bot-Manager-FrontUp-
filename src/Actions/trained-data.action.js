import {TrainedDataActionType} from "../Action-Types/trained-data.actiontype";

export function inputQuery(queryIn){
    return {type:TrainedDataActionType.SET_QUERY,
            query: queryIn
    };
}

export function inputBotIntent(intIn){
    return {type:TrainedDataActionType.SET_BOT_INTENT,
            botIntent: intIn
    };
}

export function inputBotScenario(scIn){
    return {type: TrainedDataActionType.SET_BOT_SCENARIO,
            botScenario: scIn
    };
}

export function generateIntents(Querry,BotName){
    return {type: TrainedDataActionType.GENERATE,
    		query:Querry,
    		BotName:BotName	
    };
}