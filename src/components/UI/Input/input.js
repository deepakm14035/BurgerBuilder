import React from 'react';
import styles from './input';
const Input=(props)=>{
    let inputField=null;
    switch(props.inputType){
        case("input"):
            inputField = <input className={styles.InputElement} type={props.type} value={props.value} onChange={props.valueChanged}></input>
            break;
        case("textarea"):
            inputField = <inputarea type={props.type} value={props.value} onChange={props.valueChanged}/>
            break;
}
    return(
    <div className={styles.Input}>
        <label className={styles.Label}>{props.title}</label>
        {inputField}
    </div>
    );
}

export default Input;