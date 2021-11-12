import { Height } from '@mui/icons-material';
import { Box, Button, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth'
import loginImg from '../../../images/loginImg.svg'
import Navbar from '../../Home/Navbar/Navbar';
const Register = () => {
    const { user, loading, signinWithGoogle, registerUser } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        registerUser(loginData.email, loginData.password, loginData.name, history)


    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(loginData)

    }
    return (
        <Box>
            <Navbar></Navbar>
            <Grid
            style={{
                display:'flex',
               
                
                alignItems:'center',
                
            }} 
             sx={{mt:10}} container spacing={2}>
                <Grid item xs={12} md={6}>
                {
                !loading && 
                <Typography variant='h3'>
                Register
            </Typography>
            }
                {loading && 
                <Box>
                    <Typography variant='h3'>
                        Please Wait
                    </Typography>
                    <LinearProgress style={{width:'100%'}} />
                </Box>
                }
                        {
                            !loading && <form
                    
                            style={{
                                display:'flex',
                                flexDirection:'column',
                                height:'100%',
                                alignItems:'flex-start',
                                justifyContent:'center',
                                padding:'20px'
                            }} 
                            onSubmit={handleSubmit}>
                                
                               <TextField
                                   onChange={handleOnChange}
                                   id="standard-basic"
                                   label="Name"
                                   variant="standard"
                                   name='name'
                                   sx={{mb:3}}
                                   style={{width:'100%'}}
                               />
       
                               <TextField
                                   onChange={handleOnChange}
                                   id="standard-basic"
                                   label="Email"
                                   variant="standard"
                                   name='email'
                                   sx={{mb:3}}
                                   style={{width:'100%'}}
                               />
       
       
       
                               <TextField
                                   onChange={handleOnChange}
                                   id="standard-basic"
                                   label="Password"
                                   variant="standard"
                                   name='password'
                                   sx={{mb:3}}
                                   style={{width:'100%'}}
                               />
       
       
       
                               <Button type='submit' style={{ borderRadius: '0', boxShadow: '0px 0px 0px' }} variant="contained">Register</Button>
                           </form>
                        }
                    
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src={loginImg} alt=""/>
                </Grid>


            </Grid>

        </Box>
    );
};

export default Register;