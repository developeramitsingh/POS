import {LOAD_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} from '../actionTypes/ActionTypes'

export const loadProducts = (dispatch)=>{
	dispatch({type:LOAD_PRODUCTS})
}


export const addProducts = (data)=>(dispatch, getState)=>{

	let addedItem;


	let products = getState().ProcessProductsReducer.cart;

	

	addedItem = {
		[data.name]:{
			name:data.name,
			price:data.price,
			quantity:data.quantity
		}
	}
	let length = products.length;

	
	if(products[data.name]["quantity"]){
		products[data.name]["quantity"] = products[data.name]["quantity"]+1;
		products[data.name]["total"] = products[data.name]["total"]*products[data.name]["quantity"];
	}else{
		products[data.name] = {}
		products[data.name]["quantity"] = data["quantity"];
		products[data.name]["price"] = data["price"];			
		products[data.name]["total"] = data["total"];
	}
	
	
   	
	console.log(products, "Final product");
	dispatch({type:ADD_PRODUCT, payload:products})
}