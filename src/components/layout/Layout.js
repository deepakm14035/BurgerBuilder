import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/toolbar';
const Layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;

