import {GraphActionTypes} from "../Action-Types/Graph.ActionTypes";

export function inputQuerry(event){
	return {type:GraphActionTypes.QUERRY_IN,
			querryText:event.target.value
	};
}

export function inputMainNode(event){
	return {type:GraphActionTypes.MAIN_NODE_IN,
			mainNode:event.target.value
	};
}

export function inputPrevNode(event){
	return {type:GraphActionTypes.PREV_NODE_IN,
			prevNode:event.target.value
	};
}

export function inputIntents(event){
	return {type:GraphActionTypes.INTENTS_IN,
			allIntents:event.target.value
	};
}
