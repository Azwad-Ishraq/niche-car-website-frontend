import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import contactBg from '../../../images/contact.svg'
const ContactUs = () => {
    return (
        <Box style={{ marginBottom:'150px'}} >



            <Box sx={{ p: 5 }} style={{ color: 'white' }}>


                <Typography sx={{fontFamily:'monospace'}} style={{ textAlign: 'center',color:'black',borderBottom:'5px solid #2ecc71' }} variant='h4'>
                    Send A Message
                        </Typography>

                <Grid style={{borderBottom:'5px solid #2ecc71'}} container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Box style={{
                        display:'flex',
                        flexDirection:"column"
                    }}>
                        <TextField sx={{ mb: 3 ,fontFamily:'monospace'}} style={{ width: '100%' }} id="standard-basic" label="Full Name" variant="standard" />

                        <TextField sx={{ mb: 3 }} style={{ width: '100%' }} id="standard-basic" label="Email Adress" variant="standard" />

                        <TextField

                            sx={{ mb: 3 }}
                            style={{ width: '100%' }}
                            id="filled-multiline-static"
                            label="Message"
                            multiline
                            rows={4}

                            variant="filled"
                        />
                        <Button sx={{fontFamily:'monospace'}} style={{borderRadius:'0',boxShadow:'0px 0px 0px',width:'100%'}} variant="contained">Submit</Button>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src={contactBg} alt=""/>
                    </Grid>

                   

                </Grid>

            </Box>




        </Box>
    );
};

export default ContactUs;