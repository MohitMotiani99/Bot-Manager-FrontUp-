import {ScenarioActionTypes} from "../Action-Types/Scenario.ActionTypes";

export function inputEditSC(editSC){
	return {type:ScenarioActionTypes.EDIT_SC_IN,
			scenarioEditted:editSC
	};
}

export function inputSCName(SCName){
	return {type:ScenarioActionTypes.SC_NAME_IN,
			scenarioName:SCName
	};
}

export function inputSCId(SCId){
	return {type:ScenarioActionTypes.SC_ID_IN,
			scenarioId:SCId
	};
}

export function inputSCStrat(SCStrat){
	return {type:ScenarioActionTypes.SC_STRAT_IN,
			scenarioStrat:SCStrat
	};
}

export function inputSCLOB(SCLOB){
	return {type:ScenarioActionTypes.SC_LOB_IN,
			scenarioLOB:SCLOB
	};
}

export function inputMSISDN(msisdn){
	return {type:ScenarioActionTypes.IS_MSISDN_IN,
			reqMSISDN:msisdn
	};
}

export function inputFB(feedback){
	return {type:ScenarioActionTypes.IS_FB_IN,
			reqFeedback:feedback
	};
}

export function inputResp(resp){
	return {type:ScenarioActionTypes.SC_RESP_IN,
			scenarioResp:resp
	};
}

export function inputRemovalScenario(remSC){
	return {type:ScenarioActionTypes.SC_REMOVE,
			scenarioRemove:remSC
	};
}

export function saveScenario(obj){
	return {type:ScenarioActionTypes.SAVE_SC,
			actionObj:{
			reqMSISDN:obj.reqMSISDN,
			reqFeedback:obj.reqFeedback,
			scenarioId:obj.scenarioId,
			scenarioStrat:obj.scenarioStrat,
			scenarioResp:obj.scenarioResp,
			scenarioLOB:obj.scenarioLOB,
			scenarioName:obj.scenarioName
			}
	};
}

export function loadScenario(obj){
	return {type:ScenarioActionTypes.LOAD_SC,
			scenarioEditted:obj.scenarioEditted
	};
}

export function removeScenario(obj){
	return {type:ScenarioActionTypes.REMOVE_SC,
			scenarioEditted:obj.scenarioEditted
	};
}
