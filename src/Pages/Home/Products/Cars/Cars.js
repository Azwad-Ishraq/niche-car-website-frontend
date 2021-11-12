import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCar from '../SingleCar/SingleCar';

const Cars = ({itemCount}) => {
    
    const [cars,setCars] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/cars`)
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <Container sx={{mt:12}}>
            <Typography style={{color:'#2ecc71'}} variant='h3'>
                Our Cars Collection
            </Typography>
            <Grid  sx={{mt:5}} container spacing={2}>

               
                      {
                          cars.slice(0,itemCount).map(item =>
                          <SingleCar
                          car={item}
                          >

                          </SingleCar>)
                      }
              
               
                
            </Grid>
        </Container>
    );
};

export default Cars;