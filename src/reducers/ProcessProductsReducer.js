import {ADD_PRODUCT, DELETE_PRODUCT} from '../actionTypes/ActionTypes'

const initState = {
	cart:{
			"sweater":{price:2000, quantity:1, total:2000},
	        "comuter":{price:2000, quantity:1, total:2000}
	    }
}

const ProcessProductsReducer =(state= initState, action)=>{
	switch(action.type){
		case ADD_PRODUCT:
			return{				
				cart:action.payload
			}
		break;
		case DELETE_PRODUCT:
			//let tempState = state.cart.filter(elem=>{elem.name != action.payload})
			return{
				//cart:tempState
			}
		break;
		default:
			return{
				...state	
			}
		break;
			
	}

	return state
}

export default ProcessProductsReducer;