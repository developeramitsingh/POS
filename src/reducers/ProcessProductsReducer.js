import {ADD_PRODUCT, DELETE_PRODUCT} from '../actionTypes/ActionTypes'

const initState = {
	cart:[]
}

const ProcessProductsReducer =(state= initState, action)=>{
	switch(action.type){
		case ADD_PRODUCT:
			return{
				...state,
				cart:[...state.cart, action.payload]
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