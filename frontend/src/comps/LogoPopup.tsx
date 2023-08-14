"use cleint";

import React, { useState, useEffect } from 'react';

// Get my CCM logo from the public folder
// and display it in a popup

import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function LogoPopup({children}) {
    const [shown, setShown] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShown(false);
        }, 1200);
    }
    );

    return (
        <div>
            { shown &&  <Box className = "logoBox">
                <Box className = "logo" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Image
                        src="/CCM.svg"
                        alt="CCM logo"
                        width={400}
                        height={400}
                        priority
                    />
                    <Typography>CCM at VT</Typography>
                </Box>
            </Box>}
            { !shown && <div>{children}</div>}
        </div>
    )
}





