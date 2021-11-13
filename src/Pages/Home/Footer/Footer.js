import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import footerBg from '../../../images/footerBg.jpg'



const footerBgStyle = {
    
    background: `url(${footerBg})`,
    backgroundColor: 'rgba(0, 0, 0,.7)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundAttachment: 'fixed',
    color:'white',
    backgroundSize: 'cover',
    textAlign:'left',
    
    
}
const Footer = () => {
    return (
        <Box className='skewed' style={footerBgStyle} >
            <Container>
            <Grid style={{height:'100%'}}  container spacing={5}>


<Grid  style={{display:'flex',flexDirection:'column',justifyContent:'center'}} item xs={12} md={6}>

    <Typography  sx={{pb:3,fontWeight:200,fontFamily:'monospace'}} variant='h4'>
        Get In Touch
    </Typography>

    <Typography sx={{fontFamily:'monospace'}} variant='p'>
    (+1] 515-602-6843
    </Typography>

</Grid>

<Grid style={{display:'flex',flexDirection:'column',justifyContent:'center'}} item xs={12} md={6}>

    <Typography sx={{pb:3,fontFamily:'monospace'}} variant='h4'>
    <i style={{marginRight:'10px'}} class="fas fa-map-marker-alt"></i>
    Location
    </Typography>
    <Typography sx={{fontFamily:'monospace'}}  variant='p'>
    3865 Nutters Barn Lane Clarion, IA 50525
    </Typography>
    <Typography sx={{pt:3,pb:3,fontFamily:'monospace'}}  variant='h4'>
    <i style={{marginRight:'10px'}} class="fas fa-envelope"></i>
    Email
    </Typography>
    <Typography sx={{fontFamily:'monospace'}} style={{color:'#2dcc70',cursor:'pointer'}}  variant='p'>
    chaka@gari.com
    </Typography>
    <Typography sx={{mt:3,fontFamily:'monospace'}}  variant='h4'>
    <i style={{marginRight:'10px'}} class="fab fa-google"></i>
    <i style={{marginRight:'10px'}} class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    
    </Typography>
    
</Grid>
<Grid sx={{mt:7}} style={{display:'flex',alignItems:'flex-end',height:'100%',textAlign:'center',justifyContent:'center'}} item xs={12} md={12}>
    
    <Typography sx={{fontFamily:'monospace'}} style={{textAlign:'center'}} variant='p'>
    ©Chaka.com 2021
    </Typography>
</Grid>

</Grid>
            </Container>
        </Box>
    );
};

export default Footer;