import React from 'react';
import NavigationItem from '../navigationItems/navigationItem';
import classes from './toolbar.module.css';

const toolbar=()=>{
    return (<header className={classes.Toolbar}>
        
        <NavigationItem name='Create Burger' link='/'></NavigationItem>
        <NavigationItem name='orders' link='/orders'></NavigationItem>
        <NavigationItem name='checkout' link='/checkout'></NavigationItem>
    </header>);
}

export default toolbar;