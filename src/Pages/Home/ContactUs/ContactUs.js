import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactUs = () => {
    return (
        <Box style={{ height: '70vh' }} sx={{ mt: 8 }}>

            

                    <Box sx={{ p: 5 }} style={{ backgroundColor: '#2ecc71', color: 'white', height: '100%' }}>


                        <Typography style={{ textAlign: 'center' }} variant='h4'>
                            Send A Message
                        </Typography>

                            <Box style={
                                {
                                    display:'flex',
                                    flexDirection:"column",
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:"100%",
                                    width:'100%'
                                }
                            }>
                                
                        <TextField sx={{mb:3}} style={{width:'80%'}} id="standard-basic" label="Full Name" variant="standard" />

                        <TextField sx={{mb:3}} style={{width:'80%'}} id="standard-basic" label="Email Adress" variant="standard" />

                        <TextField
                            
                            sx={{mb:3}}
                            style={{width:'80%'}}
                            id="filled-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            
                            variant="filled"
                        />
                            </Box>

                    </Box>

                

           
        </Box>
    );
};

export default ContactUs;