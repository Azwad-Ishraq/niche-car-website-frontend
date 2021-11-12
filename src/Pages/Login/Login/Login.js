import { Box, Button, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Home/Navbar/Navbar';
import loginImg from '../../../images/loginImg.svg'
const Login = () => {
    const { user, loading, signinWithGoogle, loginUser } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
       loginUser(loginData.email,loginData.password,location,history)


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
                Login
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
   
   
   
                           <span style={{display:"flex",alignItems:'center'}}>

                           <Button type='submit' style={{ borderRadius: '0', boxShadow: '0px 0px 0px' }} variant="contained">Login</Button>


                           <i onClick={()=> signinWithGoogle(location,history)} style={{fontSize:'30px',marginLeft:"10px"}} class="fab fa-google"></i>
                           </span>
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

export default Login;
