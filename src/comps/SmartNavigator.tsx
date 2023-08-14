"use client";

import Link from 'next/link';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TemporaryDrawer from "./Drawer"
import SimpleAccordian from './SingleLinkAccordian';
import SimpleLinkMenu from './SimpleLinkMenu'

// This component is designed to be a smart navigation bar
// when in mobile mode. It will display a hamburger menu
// and a popup menu when the hamburger is clicked.

// As for when it is in use on a computer screen, it will
// display a normal navigation bar.

const pages = ['Faith', 'Service', 'Community', 'Calendar', 'Staff', 'Support Us', 'Connect With Us'];
const hrefs = ['/', '/service', '/community', '/calendar', '/staff', '/support', '/connect'];

export default function SmartNavigator() {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {/* When the browser is small, give me a dropdown with links */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <TemporaryDrawer>
                    {pages.map((page, index) => (
                        <SimpleAccordian key={index} title={page}
                        hrefs={["/test"]} 
                        names={["test"]}
                        ></SimpleAccordian>
                    ))}
                </TemporaryDrawer>
                

            </Box>
            {/* When the browser is big enough, show the whole menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    {pages.map((page, index) => (
                            <SimpleLinkMenu key={index} title={page}></SimpleLinkMenu>
                    ))}
                </Box>
            </Box>

        </Box>
    )

}