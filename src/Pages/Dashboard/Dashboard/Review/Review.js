import { Alert, Box, Button, Grid, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import reviewImg from '../../../../images/review.svg'
const Review = () => {
    const [rating, setRating] = useState(0)
    const [msg, setMsg] = useState('')
    const {user} = useAuth()
    const [success,setSuccess] = useState(false)

    const handleReviewChange = (event) => {
        setRating(event.target.value);
    };
    const handleMsgChange = e => {
        setMsg(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const review = {
            msg: msg,
            rating: rating,
            userName: user.displayName
        }
        

        fetch(`https://pacific-waters-83697.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.insertedId){
                    console.log(data)
                    setSuccess(true)
                }
            })

    }
    return (
        <Box style={{ height: '80vh' }}>
            <Typography sx={{fontFamily:'monospace'}} variant='h3'>
                Review
            </Typography>

            <Grid style={{ height: '100%' }} container spacing={2}>


                <Grid item xs={12} md={6}>


                    <form
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}
                    >
                        <TextField
                            onChange={handleMsgChange}
                            style={{ width: "100%" }}
                            id="filled-multiline-static"
                            label="Review Message"
                            multiline
                            rows={4}
                            sx={{ mb: 3 }}
                            variant="filled"
                        />
                        <Typography style={{ textAlign: 'left' }} variant='p'>
                            Rating
                    </Typography>

                        <Select

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rating}
                            label="Rating"
                            onChange={handleReviewChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>

                        <Button type='submit' sx={{ mt: 3 }} style={{ borderRadius: '0', boxShadow: '0px 0px 0px' }} variant="contained">Submit</Button>
                    </form>

                </Grid>


                <Grid
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}
                    item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={reviewImg} alt="" />
                </Grid>

            </Grid>
            <Snackbar open={success} autoHideDuration={6000} onClose={()=> setSuccess(false)}>
            <Alert onClose={()=> setSuccess(false)} severity="success" sx={{ width: '100%' }}>
              Review Added Successfully
            </Alert>
          </Snackbar>
        </Box>
    );
};

export default Review;