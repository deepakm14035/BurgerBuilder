import * as ActionTypes from '../actions/actionTypes';

const defaultState={
    ingredients:{
        cheese:0,
        meat:0,
        salad:0,
        bacon:0
    },totalCost:4,
    isLoading:false,
    error:false
};

const INGREDIENT_PRICES={
    cheese:0.5,
    meat:1.5,
    salad:1,
    bacon:1.3
};

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case ActionTypes.ADD_INGREDIENT:
            return {...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientType]:state.ingredients[action.ingredientType]+1
                },
                totalCost:state.totalCost+INGREDIENT_PRICES[action.ingredientType]
            };
        case ActionTypes.REMOVE_INGREDIENT:
            let newVal=state.ingredients[action.ingredientType]-1;
            if(newVal<0){
                newVal=0;
                return {...state, 
                    ingredients:{...state.ingredients}
                };
            }
            else
                return {...state,
                    ingredients:{
                        ...state.ingredients,
                        [action.ingredientType]:newVal
                    },
                    totalCost:state.totalCost-INGREDIENT_PRICES[action.ingredientType]
                };
        case ActionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error:true
            };
        case ActionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients:action.ingredients
            }
    }
    return state;
}

export default reducer;