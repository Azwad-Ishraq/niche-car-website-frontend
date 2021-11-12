import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link, Route, Switch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from './Review/Review';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';

const drawerWidth = 240;

const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const iconStyle = {
    fontSize: '25px'
}

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logOut,admin } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List>

                <Link to='/home' style={linkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <i style={iconStyle} class="fas fa-home"></i>
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>

                {
                    user.email ?

                        <ListItem onClick={logOut} button >
                            <ListItemIcon>
                                <i style={iconStyle} class="fas fa-sign-out-alt"></i>
                            </ListItemIcon>
                            <ListItemText primary='Logout' />
                        </ListItem>

                        :
                        <Link to='/login' style={linkStyle}>
                            <ListItem button >
                                <ListItemIcon>
                                    <i style={iconStyle} class="fas fa-sign-out-alt"></i>
                                </ListItemIcon>
                                <ListItemText primary='Login' />
                            </ListItem>
                        </Link>
                }

                <Link to='/explore' style={linkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                        <i style={iconStyle} class="fas fa-car-side"></i>
                        </ListItemIcon>
                        <ListItemText primary='Explore' />
                    </ListItem>
                </Link>

                <Link to='/dashboard/pay' style={linkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                        <i style={iconStyle} class="fas fa-dollar-sign"></i>
                        </ListItemIcon>
                        <ListItemText primary='Pay' />
                    </ListItem>
                </Link>

                <Link to='/dashboard/myOrders' style={linkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                        <i style={iconStyle} class="fas fa-shopping-cart"></i>
                        </ListItemIcon>
                        <ListItemText primary='My Orders' />
                    </ListItem>
                </Link>

                <Link to='/dashboard/review' style={linkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                        <i style={iconStyle} class="fas fa-thumbs-up"></i>
                        </ListItemIcon>
                        <ListItemText primary='Review' />
                    </ListItem>
                </Link>

                {admin && 
                <Link to='/dashboard/makeAdmin' style={linkStyle}>
                <ListItem button >
                    <ListItemIcon>
                    <i style={iconStyle} class="fas fa-user-shield"></i>
                    </ListItemIcon>
                    <ListItemText primary='Make Admin' />
                </ListItem>
            </Link>

                }
                {admin && 
                <Link to='/dashboard/add' style={linkStyle}>
                <ListItem button >
                    <ListItemIcon>
                    <i style={iconStyle} class="fas fa-plus-square"></i>
                    </ListItemIcon>
                    <ListItemText primary='Add A Product' />
                </ListItem>
            </Link>
                }

                {admin && 
                <Link to='/dashboard/manageOrders' style={linkStyle}>
                <ListItem button >
                    <ListItemIcon>
                    <i style={iconStyle} class="fas fa-cogs"></i>
                    </ListItemIcon>
                    <ListItemText primary='Manage All Orders' />
                </ListItem>
            </Link>

                }
                {admin && 
                <Link to='/dashboard/manageProducts' style={linkStyle}>
                <ListItem button >
                    <ListItemIcon>
                    <i style={iconStyle} class="fas fa-tasks"></i>
                    </ListItemIcon>
                    <ListItemText primary='Manage Products' />
                </ListItem>
            </Link>
                }


            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route path='/dashboard/pay'>
                        <Typography variant='h3'>
                        Payment system coming soon.
                        </Typography>
                    </Route>

                    <Route exact path='/dashboard'>
                        <MyOrders></MyOrders>
                    </Route>

                    <Route path='/dashboard/myOrders'>
                    <MyOrders></MyOrders>

                    </Route>

                    <Route path='/dashboard/review'>
                        <Review></Review>
                    </Route>
                    <Route path='/dashboard/makeAdmin'>
                       <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path='/dashboard/add'>
                       <AddProduct></AddProduct>
                    </Route>
                    <Route path='/dashboard/manageOrders'>
                       <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path='/dashboard/manageProducts'>
                       <ManageProducts></ManageProducts>
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
