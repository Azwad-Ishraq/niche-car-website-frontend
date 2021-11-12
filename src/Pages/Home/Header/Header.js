import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import headerBg from '../../../images/headerBg.jpg'
import headerCar from '../../../images/headerCar.png'
const bgStyle = {
    height: '102vh',
    background: `url(${headerBg})`,
    backgroundColor: 'rgba(0, 0, 0,.7)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundAttachment: 'fixed',
    overflow:'hidden',
    backgroundSize: 'cover'
}
const centerElement = {
    display:'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    height:"100%",
    justifyContent:'center'
}

const Header = () => {
    return (
        <Box style={bgStyle}>
           
        <Box sx={{pr:8,pl:8}} style={{height:"100%"}}>
        <Grid style={{height:"100%",}} container spacing={2}>


<Grid style={centerElement} item xs={12} sm={12} md={6}>


        <Typography sx={{mb:5}} style={{width:'100%',textAlign:'left'}}  variant='h1'>
               <span style={{color:'#2ecc71'}}> Power &</span>
              
                <span style={{color:'white'}}> Beauty</span>                
                
        </Typography>

        <Typography sx={{mb:5}} style={{color:'white',textAlign:'left',fontWeight:'300',width:'50%'}} variant='h5'>
        Free Library’s $1M auto archives are moving to Philly’s world-famous car museum and to a Hershey attraction
        </Typography>


        <Button style={{borderRadius:'0',boxShadow:'0px 0px 0px'}} variant="contained">Discover Today</Button>
        
</Grid>

<Grid style={centerElement} item xs={12} sm={12} md={6}>
<img style={{width:'100%'}} src={headerCar} alt=""/>
</Grid>


</Grid>
        </Box>

        </Box>
    );
};

export default Header;