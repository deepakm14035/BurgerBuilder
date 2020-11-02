import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigationItem.module.css';

const NavigationItem  = (props) =>{
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link} exact activeClassName={classes.active}>
            {props.name}
            </NavLink>
        </li>
    );
}

export default NavigationItem;