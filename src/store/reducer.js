import * as ActionTypes from './actions';

const defaultState={
    ingredients:{
        cheese:0,
        meat:0,
        salad:0,
        bacon:0
    },totalCost:4
};

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case ActionTypes.ADD_INGREDIENT:
            return {...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientType]:state.ingredients[action.ingredientType]+1
                }
            };
        case ActionTypes.REMOVE_INGREDIENT:
            return {...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientType]:state.ingredients[action.ingredientType]-1
                }
            };
    }
    return state;
}

export default reducer;