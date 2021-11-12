import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import myOrderImg from '../../../images/myOrder.svg'


const iconStyle = {
  fontSize:'25px'
}



const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const { user } = useAuth()
  const [haveOrder, setHaveOrder] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then(res => res.json())
      .then(data => {

        if (data.length === 0) {
          setHaveOrder(false)
        } else {
          setHaveOrder(true)
          setOrders(data)
        }
      })
  }, [])

  const handleDelete = (id) => {
    //  eslint-disable-next-line no-restricted-globals
    const isConfirm = confirm('Ar You Sure You Want To Remove Order')
    if (isConfirm) {
      fetch(`http://localhost:5000/orders/${id}`, {
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
  return (
    <Box>
      <Typography variant='h3'>
        My Orders
           </Typography>

      {!haveOrder && <Typography variant='h5'>
        No Orders
           </Typography>}




      <Grid container spacing={2}>
        <Grid style={{
          display:'flex',
          
          flexDirection:'column',
          justifyContent:"center"
        }} item xs={12} sm={12} md={6}>
          {
            haveOrder &&
            orders.map(item =>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{color:'#2ecc71'}}>{item.car}</Typography>
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
                
              </ListItemIcon>
              <Button onClick={() => handleDelete(item._id)} style={{ borderRadius: '0', boxShadow: '0px 0px 0px', backgroundColor: '#e74c3c' }} variant="contained">Cancel Order</Button>

            </ListItemButton>
          </ListItem>


        </List>




                 
                </AccordionDetails>
              </Accordion>
            )
          }
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <img style={{width:'100%'}} src={myOrderImg} alt=""/>
        </Grid>

      </Grid>



    </Box>
  );
};

export default MyOrders;