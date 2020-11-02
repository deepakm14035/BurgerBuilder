import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient';

const Burger = (props) => {
  //.map function loops through 
  let transformedIngredients = Object.keys(props.ingredients).map(ingredientName=>{
    return [...Array(props.ingredients[ingredientName])].map((_,index)=>{
      //console.log(ingredientName+index);
      return <BurgerIngredient key={ingredientName+'('+index+')'} type={ingredientName}></BurgerIngredient>;
    });
  }).reduce((arr,el)=>{
    //console.log(arr);
    //console.log(el);
    return arr.concat(el);
  });
  //console.log(transformedIngredients);
  if(transformedIngredients.length===0){
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom'/>
    </div>
  );
}

export default Burger;
