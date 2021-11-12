import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ManageAllOrders = () => {
    const [orders,setOrders] = useState([])
    const [success,setSuccess] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])

    const handleDelete = (id) => {
        //  eslint-disable-next-line no-restricted-globals
        const isConfirm =   confirm('Ar You Sure You Want To Remove Order')
        if(isConfirm){
            fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE'
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
    const handleApprove = (order,id) => {
        const approvedOrder = {
            userEmail: order.userEmail,
            userName: order.userName,
            price: order.price,
            car:order.car,
            status: 'shipped'
        }

        fetch(`http://localhost:5000/orders/${id}`,{
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
                      <Typography variant='h5'>
                        $ {item.price}
                      </Typography>
    
    
                      <Button onClick={()=> handleDelete(item._id)} style={{borderRadius:'0',boxShadow:'0px 0px 0px',backgroundColor:'#e74c3c'}} variant="contained">Cancel Order</Button>

                      <Button sx={{ml:2}} onClick={()=> handleApprove(item,item._id)} style={{borderRadius:'0',boxShadow:'0px 0px 0px',backgroundColor:'#2ecc71'}} variant="contained">Approve Order</Button>
                    </AccordionDetails>
                  </Accordion>
                    )
            }
            <Snackbar open={success} autoHideDuration={6000} onClose={()=> setSuccess(false)}>
            <Alert onClose={()=> setSuccess(false)} severity="success" sx={{ width: '100%' }}>
              Order Approved Successfully
            </Alert>
          </Snackbar>
        </Box>
    );
};

export default ManageAllOrders;