import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LinkStyle={
    color:'#2ecc71',
    textDecoration:'none'
}
const Navbar = () => {
  const {user,logOut} = useAuth()
    return (
        <Box style={{position:'fixed',top:'0',right:'0',left:'0'}} >
        <AppBar style={{backgroundColor:"transparent",boxShadow:'none'}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>

            <Link style={LinkStyle} to='/home'>
            <Button color="inherit">Home</Button>
            </Link>

            {
              user.email? <Button onClick={logOut} style={LinkStyle} color="inherit">Logout</Button>
              :
              <Link style={LinkStyle} to='/login'>
            <Button color="inherit">Login</Button>
            </Link>
            }

            {
              user.email ? <span></span>
              :
              <Link style={LinkStyle} to='/register'>
            <Button color="inherit">Register</Button>
            </Link>
            }

            <Link style={LinkStyle} to='/explore'>
            <Button color="inherit">Explore</Button>
            </Link>

            {
              user.email ?
              <Link style={LinkStyle} to='/dashboard'>
            <Button color="inherit">Dashboard</Button>
            </Link>
            :
            <span></span>
            }

            

          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;