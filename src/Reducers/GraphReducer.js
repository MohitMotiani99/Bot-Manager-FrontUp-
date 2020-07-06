import {GraphActionTypes} from "../Action-Types/Graph.ActionTypes"

const initialState={
	querryText:"",
	mainNode:"",
	prevNode:"",
	allIntents:[]
};

export default function GraphReducer(state=initialState,action){

	switch(action.type){

		case GraphActionTypes.QUERRY_IN :
			console.log("hey");
			return{
				...state,
				querryText:action.querryText
			};

		/*
		case GraphActionTypes.GENERATE :
			return{
				...state,
				querryText:action.querryText
			};
		*/
		case GraphActionTypes.MAIN_NODE_IN :
			return{
				...state,
				mainNode:action.mainNode
			};

		case GraphActionTypes.PREV_NODE_IN :
			return{
				...state,
				prevNode:action.prevNode
			};

		case GraphActionTypes.INTENTS_IN :
			return{
				...state,
				allIntents:action.allIntents
			};
		
		/*
		case GraphActionTypes.QUERRY_IN :
			return{
				...state,
				querryText:action.querryText
			};

		case GraphActionTypes.QUERRY_IN :
			return{
				...state,
				querryText:action.querryText
			};
		*/

		default :
			return state;
			
	}
}