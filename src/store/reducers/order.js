import * as actionTypes from '../actions/actionTypes';

const initState={
    orders:[],
    isLoading:false,
    purchased:false
};

const reducer = (state=initState,action)=>{
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_INIT:
            return {...state,
                purchased:false
            };
        case actionTypes.PURCHASE_BURGER_START:
            return {...state,
                isLoading:true
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {...action.orderData,id:action.orderId};
            return {...state,
                isLoading:false,
                purchased:true,
                orders:state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {...state,
                isLoading:false
            };
        default:
            return {...state};
    }
    return {...state};
};
export default reducer;