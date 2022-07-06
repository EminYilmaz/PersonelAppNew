import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        marginRight: 150,
        color: 'white',
        textDecoration: 'none'
    }

});



const Navbar = () => {


    const classes = useStyle();

    return (
        <AppBar className={classes.header} style={{ backgroundColor: '#111111' }} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/"> Main Page</NavLink>
                <NavLink className={classes.tabs} to="/list">List</NavLink>
                <NavLink className={classes.tabs} to="/add"> Add  </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;