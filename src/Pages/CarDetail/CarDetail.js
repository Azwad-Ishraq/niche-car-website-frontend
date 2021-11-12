import { Alert, Box, Button, Container, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../hooks/useAuth';

const iconStyle = {
    fontSize: '25px'
}

const CarDetail = (props) => {

    const {id} = useParams()
    const {user} = useAuth()
    const [car,setCar] = useState({})
    const [success,setSuccess] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/cars/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    },[])
    const {des,img,name,price} =car;

    const placeOrder = () => {
        const order = {
            userEmail: user.email,
            car: name,
            price: price,
            userName: user.displayName
        }
        fetch(`http://localhost:5000/orders`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                setSuccess(true)
                
            }
        })
    }
    
    return (
        <Box>
            <Navbar></Navbar>

            <Container sx={{mt:10}}>
            <Typography variant='h3'>
                Order Summery
            </Typography>


            <List sx={{mt:5}}>

          <ListItem disablePadding>
            <ListItemButton>
              
              <img style={{width:'50%'}} src={img} alt=""/>
              
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i style={iconStyle} class="fas fa-user"></i>
              </ListItemIcon>
              <ListItemText primary={`User Name: ${user.displayName}`} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i style={iconStyle} class="fas fa-envelope"></i>
              </ListItemIcon>
              <ListItemText primary={`User Email Address: ${user.email}`} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i style={iconStyle} class="fas fa-car"></i>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i style={iconStyle} class="fas fa-dollar-sign"></i>
              </ListItemIcon>
              <ListItemText primary={price} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i style={iconStyle} class="fas fa-file"></i>
              </ListItemIcon>
              <ListItemText primary={des} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>

          <Button onClick={placeOrder} sx={{mt:3}} style={{borderRadius:'0',boxShadow:'0px 0px 0px'}} variant="contained">Purchase Now</Button>
          </ListItem>

          

        </List>


            </Container>
            {success &&  
            <Snackbar open={success} autoHideDuration={6000} onClose={()=> setSuccess(false)}>
            <Alert onClose={()=> setSuccess(false)} severity="success" sx={{ width: '100%' }}>
              Order Booked Successfully
            </Alert>
          </Snackbar>
            }
        </Box>
    );
};

export default CarDetail;