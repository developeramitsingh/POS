import {LOAD_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} from '../actionTypes/ActionTypes'

export const loadProducts = (dispatch)=>{
	dispatch({type:LOAD_PRODUCTS})
}


export const addProducts = (data)=>(dispatch, getState)=>{

	let addedItem;

	let products = getState().ProcessProductsReducer.cart;
	
	if(products[data.name]){		
		products[data.name]["quantity"] = products[data.name]["quantity"]+1;
		products[data.name]["total"] = products[data.name]["total"]*products[data.name]["quantity"];
	}else{		
		products[data.name] = {}
		products[data.name]["price"] = data["price"];
		products[data.name]["quantity"] = 1;					
		products[data.name]["total"] = data["price"];
	}

   	
	console.log(products)
	dispatch({type:ADD_PRODUCT, payload:products})
}


export const deleteProduct =(name)=>(dispatch)=>{
	dispatch({type:DELETE_PRODUCT,payload:name})
}

export const customQuantity = (data)=>(dispatch)=>{
	dispatch({type:ADD_PRODUCT, payload:data})
}
