import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme.js';
import ResponsiveAppBar from './ResponsiveAppBar'
import Container from '@mui/material/Container';
import CustomFooter from './CustomFooter';
import Box from '@mui/material/Box';

export default function Template({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box sx={{paddingTop : "60px"}}></Box>
            <Container maxWidth="md">
                <Box className="smartMargin" sx={{minHeight : "100vh"}}>
                    {/* Scrollable Div */}
                    {children}
                </Box>
                {/* Display an image in the background */}
                <Box sx={{position : "static"}}>
                    <img src="/images/Procession4.jpg" style={{width : "100%", height : "100%", objectFit : "cover", position : "fixed", top : 0, left : 0, zIndex : -1}}></img>
                </Box>

            </Container>
            <CustomFooter></CustomFooter>
        </ThemeProvider>
    )
}
