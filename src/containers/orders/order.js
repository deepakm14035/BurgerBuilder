import classes from './order.module.css';
import React from 'react';

const order = (props)=>{
    let orderData = Object.keys(props.data.ingredients).map(key=>{
        return (<p>{key}: {props.data.ingredients[key]}</p>);
    });
    return (<div className={classes.Order}>
        <p>Ingredients-</p>
        {orderData}
        <p>Price: {props.data.price}</p>
    </div>);
}

export default order;