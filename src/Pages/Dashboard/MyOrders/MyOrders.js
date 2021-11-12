import { Accordion, AccordionDetails, AccordionSummary, Box,  Button,  Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    const {user} = useAuth()
    const [haveOrder,setHaveOrder] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data =>{
          
          if(data.length === 0){
            setHaveOrder(false)
          }else{
            setHaveOrder(true)
            setOrders(data)
          }
        })
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
    return (
        <Box>
           <Typography variant='h3'>
               My Orders
           </Typography>

        {!haveOrder && <Typography variant='h5'>
               No Orders
           </Typography>}


        {
          haveOrder &&
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
                  <Typography variant='h6'>
                    Status: {item.status}
                  </Typography>


                  <Button onClick={()=> handleDelete(item._id)} style={{borderRadius:'0',boxShadow:'0px 0px 0px',backgroundColor:'#e74c3c'}} variant="contained">Cancel Order</Button>
                </AccordionDetails>
              </Accordion>
                )
        }


           
        </Box>
    );
};

export default MyOrders;