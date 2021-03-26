import React from 'react';
import { connect } from 'react-redux';
import Burger from '../../burger/Burger';
import classes from './checkoutSummary.module.css'
const checkoutSummary = (props)=>{

    let val1=1;

    return (
        <div className={classes.CheckoutSummary}>
            <h2> tastes good</h2>
            <div style={{width:'100%', height:'300px'}}>
                <Burger ingredients={props.ingredients}></Burger>
                <button onClick={props.onProceedClicked}>Proceed</button>
                <button onClick={props.onCancel}>cancel</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        ings:state.props
    }
}

export default connect(mapStateToProps)( checkoutSummary);