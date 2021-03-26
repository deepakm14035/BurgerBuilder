import * as actionTypes from './actionTypes';
import AxiosInstance from '../../axios-orders';
import { act } from 'react-dom/test-utils';

export const addIngredient=(name)=>{
    return {type:actionTypes.ADD_INGREDIENT,
        ingredientType:name};
}

export const removeIngredient=(name)=>{
    return {type:actionTypes.REMOVE_INGREDIENT,
        ingredientType:name};
}

export const setIngredients = (ingredients)=>{
    return {type:actionTypes.SET_INGREDIENTS,...ingredients};
}

export const fetchIngredientsFailed = ()=>{
    return {type:actionTypes.FETCH_INGREDIENTS_FAILED};
}

export const initIngredients=()=>{
    return dispatch => {
        AxiosInstance.get("/ingredients.json").then(res=>{
            console.log("[actions/burgerBuilder]"+res.data);
            dispatch(setIngredients({ingredients:res.data}));
        }).catch(e=>{
            dispatch(fetchIngredientsFailed());
        });
    }
}