import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Cars from '../Home/Products/Cars/Cars';

const Explore = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Box>
                <Cars></Cars>
            </Box>

        </Box>
    );
};

export default Explore;