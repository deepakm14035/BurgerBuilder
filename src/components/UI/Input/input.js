import React from 'react';

const Input=(props)=>{
    let inputField=null;
    inputField = <input type={props.type} value={props.value} onChange={props.valueChanged}></input>
    return(<div>
        <span>{props.title}</span>
        {inputField}
    </div>);
}

export default Input;