import React from 'react';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme.js';
import ResponsiveAppBar from './ResponsiveAppBar'
import Container from '@mui/material/Container';
import CustomFooter from './CustomFooter';
import Box from '@mui/material/Box';

import Image from 'next/image'

interface MyComponentProps {
    children: ReactNode;
  }

export default function Template({ children } : MyComponentProps) {
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
                <Box sx={{position : "static", display: "flex", justifyContent: "center", alilgnItems: "center"}}>
                    <Image alt = "background" src="./images/Procession4.jpg" width = {1750} height = {1000} style={{objectFit : "cover", position : "fixed", top : 0, zIndex : -1}}></Image>
                </Box>

            </Container>
            <CustomFooter></CustomFooter>
        </ThemeProvider>
    )
}
