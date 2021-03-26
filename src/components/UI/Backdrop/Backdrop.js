import React from 'react';

import classes from './backdrop.module.css';

const backdrop = (props)=>{
    const html = props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null;
    return html;
}

export default backdrop;