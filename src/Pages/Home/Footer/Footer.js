import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import footerBg from '../../../images/headerBg.jpg'



const footerBgStyle = {
   
    background: `url(${footerBg})`,
    backgroundColor: 'rgba(0, 0, 0,.7)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundAttachment: 'fixed',
    color:'white',
    backgroundSize: 'cover',
    textAlign:'center'
}
const Footer = () => {
    return (
        <Box style={footerBgStyle} sx={{ mt: 10 }}>
            <Container>
            <Grid  container spacing={5}>


<Grid item xs={12} md={12}>

    <Typography variant='h4'>
        Get In Touch
    </Typography>
    <Typography variant='h5'>
    (+1] 515-602-6843
    </Typography>

</Grid>

<Grid item xs={12} md={12}>
    <Typography sx={{p:3}} variant='h4'>
    Location
    </Typography>
    <Typography sx={{p:3}} variant='h5'>
    3865 Nutters Barn Lane Clarion, IA 50525
    </Typography>
    <Typography sx={{p:3}} variant='h4'>
    Email
    </Typography>
    <Typography sx={{p:3}} variant='h5'>
    chaka@gari.com
    </Typography>
    <Typography sx={{pt:3}} variant='p'>
    ©Chaka.com 2021
    </Typography>
</Grid>

</Grid>
            </Container>
        </Box>
    );
};

export default Footer;