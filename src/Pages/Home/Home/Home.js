
import { Box } from '@mui/material';
import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';


import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Cars from '../Products/Cars/Cars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Header></Header>
            <Cars itemCount='6'></Cars>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </Box>
    );
};

export default Home;