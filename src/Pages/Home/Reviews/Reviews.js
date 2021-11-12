import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])
   
    
    return (
        <Box style={{width:"100%",height:'50vh'}} sx={{ mt: 8 }}>
            <Typography variant='h3'>
                What do our customers think?
           </Typography>

            <Container style={{
                display: 'flex',
                alignItems:'center',
                overflowX:'scroll',
                height:'100%'
                }}>

                    {
                        reviews.map(item => <SingleReview
                        review={item} rating={item.rating}
                        ></SingleReview>)
                    }
               
           </Container>
        </Box>
    );
};

export default Reviews;