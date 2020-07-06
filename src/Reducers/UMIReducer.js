import {UMIActionTypes} from "../Action-Types/UMI.ActionTypes"

const initialState={
	
};

export default function UMIReducer(state=initialState,action){

	switch(action.type){

		case UMIActionTypes.DOWNLOAD_TEXT :
			return state;
		default :
			return state;
			
	}
}