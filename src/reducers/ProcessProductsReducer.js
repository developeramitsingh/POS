import {ADD_PRODUCT, DELETE_PRODUCT} from '../actionTypes/ActionTypes'

const initState = {
	cart:{
			"sweater":{price:"2000", quantity:1, total:"2000"},
	        "comuter":{price:"2000", quantity:1, total:"2000"}
	    }
}

const ProcessProductsReducer =(state= initState, action)=>{
	switch(action.type){
		case ADD_PRODUCT:
			return{				
				cart:action.payload
			}
		
		case DELETE_PRODUCT:
			let object = {}

			let tempState = Object.keys(state.cart).reduce((obj, key)=>{
				if (obj != action.payload){
					object[key] = state.cart[key]
				}
				
				return object
			})
			
			if(typeof tempState != "string"){
				return {
					cart:tempState
				}	
			}else{
				return { cart: {} }
			}
			
		
		default:
			return state
		
	}

}

export default ProcessProductsReducer;