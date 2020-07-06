import {ScenarioActionTypes} from "../Action-Types/Scenario.ActionTypes"

const initialState={
	scenarioEditted:"",
	scenarioName:"",
	scenarioId:"",
	scenarioStrat:"",
	scenarioLOB:"",
	reqMSISDN:true,
	reqFeedback:true,
	scenarioResp:"",
	scenarioRemove:"",
	saveOK:true,
	loadOK:true,
	removeOK:true
};

export default function ScenarioManagerReducer(state=initialState,action){

	switch(action.type){

		case ScenarioActionTypes.EDIT_SC_IN:
			return{
				...state,
				scenarioEditted:action.scenarioEditted
			};

		case ScenarioActionTypes.SC_NAME_IN:
			return{
				...state,
				scenarioName:action.scenarioName
			};

		case ScenarioActionTypes.SC_ID_IN:
			return{
				...state,
				scenarioId:action.scenarioId
			};

		case ScenarioActionTypes.SC_STRAT_IN:
			return{
				...state,
				scenarioStrat:action.scenarioStrat
			};

		case ScenarioActionTypes.IS_MSISDN_IN:
			return{
				...state,
				reqMSISDN:action.reqMSISDN
			};

		case ScenarioActionTypes.IS_FB_IN:
			return{
				...state,
				reqFeedback:action.reqFeedback
			};

		case ScenarioActionTypes.SC_RESP_IN:
			return{
				...state,
				scenarioResp:action.scenarioResp
			};

		case ScenarioActionTypes.SC_REMOVE:
			return{
				...state,
				scenarioRemove:action.scenarioRemove
			};

		case ScenarioActionTypes.SC_LOB_IN:
			return{
				...state,
				scenarioLOB:action.scenarioLOB
			};
						
		default :
			return state;
			
	}
}