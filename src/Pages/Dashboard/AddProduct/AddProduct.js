import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth()
    const [car, setCar] = useState()
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...car }
        newInfo[field] = value;

        setCar(newInfo)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const Cardata = { ...car };
        fetch(`http://localhost:5000/cars`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Cardata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    setSuccess(true)
                }
            })
    }
    return (
        <Box>
            <Typography variant='h3'>
                Add Product
            </Typography>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >

                <TextField onBlur={handleOnBlur} id="standard-basic" label="Name" variant="standard" name='name' />

                <TextField onBlur={handleOnBlur} id="standard-basic" label="Imgae Link" variant="standard" name="img" />

                <TextField multiline
                    rows={4} onBlur={handleOnBlur} id="standard-basic" label="Description" variant="standard" name="des" />

                <TextField onBlur={handleOnBlur} id="standard-basic" label="Price" variant="standard" name="price" />

                <Button sx={{ mt: 2 }} type='submit' style={{ borderRadius: '0', boxShadow: '0px 0px 0px' }} variant="contained">Add</Button>
            </form >
            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Car  Added Successfully
        </Alert>
            </Snackbar>
        </Box>
    );
};

export default AddProduct;