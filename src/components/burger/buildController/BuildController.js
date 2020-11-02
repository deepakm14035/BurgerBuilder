import React from 'react';
import classes from './BuildController.module.css';
import BuildControl from './buildControl/BuildControl';
const controls = [
    {label:"Bacon", type:"bacon"},
    {label:"Salad", type:"salad"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
];

const BuildController = (props) =>{
    return (
    <div className={classes.BuildController}>
        {controls.map(ctrl=>{
            return <BuildControl key={ctrl.label} label={ctrl.type} ingredientAdd = {props.ingredientAdd} ingredientSubtract={props.ingredientSubtract}></BuildControl>;
        })}
        <button onClick={props.ordered}>ORDER NOW</button>
    </div>);
}

export default BuildController;