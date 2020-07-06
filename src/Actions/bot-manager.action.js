import {BotManagerActionType} from "../Action-Types/bot-manager.actiontype";

export function inputBotName(value){
    return {type: BotManagerActionType.SET_BOT_NAME,
            botName: value
    };
}

export function inputBotToken(value){
    return {type: BotManagerActionType.SET_BOT_TOKEN,
            botToken: value
    };
}

export function inputBotStrategy(value){
    return {type: BotManagerActionType.SET_BOT_STRATEGY,
            botStrategy: value
    };
}

export function inputBotAlgorithm(value){
    return {type: BotManagerActionType.SET_BOT_ALGORITHM,
            botAlgorithm: value
    };
}

export function inputBotMsisdn(value){
    return {type: BotManagerActionType.SET_BOT_MSISDN,
            botMsisdn:value
    };
}

export function inputBotScore(value){
    return {type: BotManagerActionType.SET_BOT_SCORE,
            botScore:value
    };
}

