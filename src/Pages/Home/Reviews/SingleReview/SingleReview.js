import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import { Typography } from '@mui/material';
const SingleReview = (props) => {
    const {review,rating} = props;
    const ratingArray = [...Array(rating)]
    
    
    return (
        <Card sx={{m:3}} style={{height:'80%',backgroundColor:'transparent',width:'100%'}} >
      <CardContent sx={{p:2}} >
        <Typography style={{textAlign:'left',color:'#2ecc71'}} sx={{ fontSize: 14 ,p:2,fontFamily:'monospace'}}   gutterBottom>
        {review.userName}
        </Typography>
       
        <Typography style={{textAlign:'left',overflowY:"scroll",height:'150px'}} sx={{ mb: 1.5,p:2,fontFamily:'monospace' }} color="text.secondary">
         {review.msg}
        </Typography>
        <Typography style={{textAlign:'left',}} variant="body2">
          
              {
                  ratingArray.map(star => <i style={{color:'orange'}} class="fas fa-star"></i>)
              }
          
        </Typography>
      </CardContent>
      
    </Card>
    );
};

export default SingleReview;