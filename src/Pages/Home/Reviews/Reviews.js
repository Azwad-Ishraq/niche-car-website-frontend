import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://pacific-waters-83697.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])
   
    
    return (
        <Box style={{width:"100%",height:'50vh',marginTop:'80px',marginBottom:'80px'}}>
            <Typography sx={{fontFamily:'monospace'}} variant='h3'>
                What do our customers think?
           </Typography>

            <Container style={{
                display: 'flex',
                alignItems:'center',
                overflowX:'hidden',
                height:'100%',
                width:'100%',
                flexWrap:'wrap',
                overflowY:'scroll'
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