import {TopBarActionTypes} from "../Action-Types/TopBar.ActionTypes"

const initialState={
	botName:"",
	botList:['None',"Chat Bot","HR Bot","Payments Bank Bot","PrePaid Bot","DTH Bot"]
	
};

export default function TopBarReducer(state=initialState,action){

	switch(action.type){

		case TopBarActionTypes.SELECT_BOT :
			console.log("hey");
			return{
				...state,
				botName:action.botName
			};
			
		case TopBarActionTypes.ADD_BOT :
			return {
				...state,
				botList:state.botList.push(action.bot)
			};
		case TopBarActionTypes.REMOVE_BOT :
			const index=state.botList.indexOf(action.bot);
			return{
				...state,
				botList:state.botList.splice(index,1)
			};

		
		default :
			return state;
			
	}
}