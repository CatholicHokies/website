"use client";

import Link from 'next/link';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

// This component is designed to be a smart navigation bar
// when in mobile mode. It will display a hamburger menu
// and a popup menu when the hamburger is clicked.

// As for when it is in use on a computer screen, it will
// display a normal navigation bar.

const pages = ['Faith', 'Service', 'Community', 'Calendar', 'Staff', 'Support Us', 'Connect With Us'];
const hrefs = ['/', '/service', '/community', '/calendar', '/staff', '/support', '/connect'];

export default function SmartNavigator() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {/* When the browser is small, give me a dropdown with links */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <IconButton 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: "white"}}>
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {pages.map((page, index) => (
                        <MenuItem component={Link} key={index} href={hrefs[index]} onClick={handleClose}>{page}</MenuItem>
                    ))}
                </Menu>    
            </Box>
            {/* When the browser is big enough, show the whole menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    {pages.map((page, index) => (
                        <Button key={index} component={Link} href={hrefs[index]} sx={{ color: "white" }}>{page}</Button>
                    ))}
                </Box>
            </Box>

        </Box>
    )

}