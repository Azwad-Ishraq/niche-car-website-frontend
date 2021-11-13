import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')
    const [success,setSuccess] = useState(false)
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = {email}
        e.preventDefault()
        fetch(`https://pacific-waters-83697.herokuapp.com/users/admin`,{
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            
           if(data.modifiedCount){
            console.log(data)
            setSuccess(true)
           }
                
            
        })
    }
    return (
        <Box>
            <Typography sx={{fontFamily:'monospace'}} variant='h3'>
                Make Admin
            </Typography>
            <form style={{display:'flex',justifyContent:'center'}} onSubmit={handleSubmit}>

            <TextField onBlur={handleOnBlur} id="filled-basic" label="Email" variant="filled" />
            <Button type='submit' style={{borderRadius:'0',boxShadow:'0px 0px 0px'}} variant="contained">Make Admin</Button>

            </form>

            <Snackbar open={success} autoHideDuration={6000} onClose={()=> setSuccess(false)}>
            <Alert onClose={()=> setSuccess(false)} severity="success" sx={{ width: '100%' }}>
              Admin Added Successfully
            </Alert>
          </Snackbar>
        </Box>
    );
};

export default MakeAdmin;