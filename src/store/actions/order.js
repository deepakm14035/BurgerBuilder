import * as actionTypes from '../actions/actionTypes';
import AxiosInstance from '../../axios-orders';

export const purchaseBurgerFail = (error)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
};

export const purchaseBurgerSuccess = (orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        ...orderData
    }
};

export const purchaseBurgerStart = ()=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData)=>{
    console.log("purchase returning");
    return dispatch=>{
        console.log("purchase loading");
        dispatch(purchaseBurgerStart());
        console.log("axios calling");
        AxiosInstance.post("/completeData.json",orderData).then((response)=>{
            console.log("[actions/order]"+response);
            dispatch(purchaseBurgerSuccess({orderId:response.data.name, orderData:orderData}));
        }).catch(err=>{
            dispatch(purchaseBurgerFail(err));
        });
    }
}

export const purchaseInit = ()=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    }
}