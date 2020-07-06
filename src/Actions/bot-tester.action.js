import {BotTesterActionType} from "../action-types/bot-tester.actiontype";

export function inputBrowser(browser_val){
    return {type:BotTesterActionType.SET_BROWSER,
            browser: browser_val
    };
}
