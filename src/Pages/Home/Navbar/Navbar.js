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
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';




const LinkStyle={
    color:'#2ecc71',
    textDecoration:'none',
    
}
const Navbar = () => {
  const theme = useTheme()
  const {user,logOut} = useAuth()
  const useStyle= makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display:'none'
      }
    },
    navItemContainer : {
      [theme.breakpoints.down('sm')]: {
        display:'none'
      }
    }

  })
  const {navIcon,navItemContainer} = useStyle()
  const [state, setState] = React.useState(false)

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <Link style={LinkStyle} to='/home'>
          <ListItem  button >
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          </Link>


        {user.email?
          
          <ListItem style={{color:'#2ecc71'}} onClick={logOut} button >
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
          
         :
         <Link style={LinkStyle} to='/login'>
         <ListItem button >
           <ListItemIcon>
             
           </ListItemIcon>
           <ListItemText primary='Login' />
         </ListItem>
         </Link>

         }

        {
          user.email?
          <span></span>
          :
          <Link style={LinkStyle} to='/register'>
         <ListItem button >
           <ListItemIcon>
             
           </ListItemIcon>
           <ListItemText primary='Register' />
         </ListItem>
         </Link>
        }
         <Link style={LinkStyle} to='/explore'>
         <ListItem button >
           <ListItemIcon>
             
           </ListItemIcon>
           <ListItemText primary='Explore' />
         </ListItem>
         </Link>

         {
           user.email?
           <Link style={LinkStyle} to='/dashboard'>
           <ListItem button >
             <ListItemIcon>
               
             </ListItemIcon>
             <ListItemText primary='Dashboard' />
           </ListItem>
           </Link>
           :
           <span></span>

         }
          
          
        
      </List>
      
    </Box>
  );

    return (
        <>
        <Box style={{position:'fixed',top:'0',right:'0',left:'0'}} >
        <AppBar style={{backgroundColor:"transparent",boxShadow:'none'}} position="static">
          <Toolbar>
      
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={()=> setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>

            <Box className={navItemContainer}>
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
            </Box>

            

          </Toolbar>
        </AppBar>
      </Box>
      <div>
      {
        <React.Fragment>
          
          <Drawer
            
            open={state}
            onClose={()=> setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      }
    </div>
        </>
    );
};

export default Navbar;