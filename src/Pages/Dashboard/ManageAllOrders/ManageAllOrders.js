import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import manageOrdersImg from '../../../images/manageOrders.svg'



const iconStyle = {
    fontSize: '25px'
}
const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        fetch(`https://pacific-waters-83697.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        //  eslint-disable-next-line no-restricted-globals
        const isConfirm = confirm('Ar You Sure You Want To Remove Order')
        if (isConfirm) {
            fetch(`https://pacific-waters-83697.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }

    }
    const handleApprove = (order, id) => {
        const approvedOrder = {
            userEmail: order.userEmail,
            userName: order.userName,
            price: order.price,
            car: order.car,
            status: 'shipped'
        }

        fetch(`https://pacific-waters-83697.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approvedOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSuccess(true)
            })


    }
    return (
        <Box>
            <Typography variant='h3'>
                Manage All Orders
            </Typography>




            <Grid container spacing={2}>
                <Grid style={{
                    display: 'flex',

                    flexDirection: 'column',
                    justifyContent: "center"
                }} item xs={12} md={6}>
                    {
                        orders.map(item =>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{item.car}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>

                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <i style={iconStyle} class="fas fa-user"></i>
                                                </ListItemIcon>
                                                <ListItemText primary={`User Name: ${item.userName}`} />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <i style={iconStyle} class="fas fa-envelope"></i>
                                                </ListItemIcon>
                                                <ListItemText primary={`User Email: ${item.userEmail}`} />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <i style={iconStyle} class="fas fa-car"></i>
                                                </ListItemIcon>
                                                <ListItemText primary={`Car: ${item.car}`} />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <i style={iconStyle} class="fas fa-dollar-sign"></i>
                                                </ListItemIcon>
                                                <ListItemText primary={`Price: ${item.price}`} />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>

                                                    <i style={iconStyle} class="fas fa-spinner"></i>

                                                </ListItemIcon>
                                                <ListItemText primary={`Status: ${item.status}`} />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <i style={iconStyle} class="fas fa-tasks"></i>
                                                </ListItemIcon>
                                                <Button onClick={() => handleDelete(item._id)} style={{ borderRadius: '0', boxShadow: '0px 0px 0px', backgroundColor: '#e74c3c' }} variant="contained">Remove Order</Button>
                                                <Button sx={{ ml: 3 }} onClick={() => handleApprove(item, item._id)} style={{ borderRadius: '0', boxShadow: '0px 0px 0px', backgroundColor: '#2ecc71' }} variant="contained">Approve Order</Button>

                                            </ListItemButton>
                                        </ListItem>




                                    </List>



                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src={manageOrdersImg} alt=""/>
                </Grid>

            </Grid>





            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Order Approved Successfully
            </Alert>
            </Snackbar>
        </Box>
    );
};

export default ManageAllOrders;