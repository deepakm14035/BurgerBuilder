import React from 'react';
import Burger from '../../burger/Burger';
import classes from './checkoutSummary.module.css'
const checkoutSummary = (props)=>{

    

    return (
        <div className={classes.CheckoutSummary}>
            <h2>we hope it tastes good</h2>
            <div style={{width:'100%', height:'300px'}}>
                <Burger ingredients={props.ingredients}></Burger>
                <button onClick={props.onProceedClicked}>Proceed</button>
                <button onClick={props.onCancel}>cancel</button>
            </div>
        </div>
    );
}
export default checkoutSummary;