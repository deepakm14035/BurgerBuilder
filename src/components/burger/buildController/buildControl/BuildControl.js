import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) =>{
    return (<div className={classes.BuildControl}>
        <button onClick={()=>props.ingredientSubtract(props.label)}>Remove</button>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={()=>props.ingredientAdd(props.label)}>Add</button>
    </div>);
}

export default BuildControl;