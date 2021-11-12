import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ManageProducts = () => {
    const [cars,setCars] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/cars`)
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    const handleDelete = (id) => {
        //  eslint-disable-next-line no-restricted-globals
        const isConfirm =   confirm('Ar You Sure You Want To Remove Order')
        if(isConfirm){
            fetch(`http://localhost:5000/cars/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount) {
                const remaining = cars.filter(order => order._id !== id);
                setCars(remaining)
            }
        })
        }
        
    }
    return (
        <Box>
            <Typography variant='h3'>
                Manage All Products
            </Typography>


            {
                cars.map(item=> 

                    <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{item.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='h5'>
                         
                      </Typography>
    
    
                      <Button onClick={()=> handleDelete(item._id)} style={{borderRadius:'0',boxShadow:'0px 0px 0px',backgroundColor:'#e74c3c'}} variant="contained">Delete Product</Button>

                      
                    </AccordionDetails>
                  </Accordion>
                    )
            }


        </Box>

        // 2016 Mustang GT
        // https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80
        // The sixth generation Ford Mustang (S550) is the current iteration of the Mustang pony car manufactured by Ford. In departure from prior Mustang models, the sixth generation Mustang includes fully independent rear suspension on all models, as well as an optional 2.3L EcoBoost turbocharged and direct injected four-cylinder engine. The new Mustang was introduced as a 2015 model year vehicle, marking the fiftieth anniversary of the Ford Mustang, which was revealed as a 1965 model year vehicle on April 17, 1964.
        // 45000
    );
};

export default ManageProducts;