import {combineReducers} from 'redux';
import AllProductsReducer from './AllProductsReducer';
import ProcessProductsReducer from './ProcessProductsReducer';

export default combineReducers(
	{
		AllProductsReducer:AllProductsReducer,
		ProcessProductsReducer:ProcessProductsReducer
	})