import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const SingleCar = (props) => {
    const  {name,des,price,img,_id} = props.car;
    return (
        <Grid style={{display:'flex',justifyContent:'center'}} item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
      
        
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Car Image"
      />
      <CardContent style={{textAlign:"left"}}>

        <Typography sx={{mb:2,fontFamily:'monospace'}}  variant="h5" color="text.secondary">
          {name}
        </Typography>
        <Typography sx={{mb:1,fontFamily:'monospace'}} style={{color:'#2ecc71'}}  variant="h6" color="text.secondary">
          {price}$
        </Typography>

        <Link style={{color:'white',textDecoration:'none'}} to={`/cars/${_id}`}>
        <Button sx={{fontFamily:'monospace'}} style={{borderRadius:'0',boxShadow:'0px 0px 0px'}} variant="contained">Purchase</Button>
        </Link>

      </CardContent>
      
      
    </Card>    
        </Grid>
    );
};

export default SingleCar;