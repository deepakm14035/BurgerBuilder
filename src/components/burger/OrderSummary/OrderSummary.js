import React from 'react';
import Modal from '../../UI/Modal/Modal';
const OrderSummary = (props) =>{
    const orderData = Object.keys(props.order).map(key=>{
    return <p key={key}>{key} : {props.order[key]}</p>
    });
    return (<Modal show={props.ordering}>
        <h2>ORDER SUMMARY</h2>
        <p>Items - </p>
        {orderData}
        <button onClick={props.submitOrder}>SUBMIT</button>
    </Modal>)
}

export default OrderSummary;