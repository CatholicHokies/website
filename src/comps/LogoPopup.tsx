"use cleint";

import React, { useState, useEffect, ReactNode  } from 'react';

// Get my CCM logo from the public folder
// and display it in a popup

import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface MyComponentProps {
    children: ReactNode;
  }

type Visibility = 'visible' | 'hidden';

export default function LogoPopup({children} : MyComponentProps ) {
    const [shown, setShown] = useState(true);
    const [css, setCss] = useState("hidden");

    useEffect(() => {
        setTimeout(() => {
            setShown(false);
            setCss("visible")
        }, 1200);
    }
    );

    return (
        <div>
            { shown &&  <Box className = "logoBox">
                <Box className = "logo" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Image
                        src="./CCM.svg"
                        alt="CCM logo"
                        width={300}
                        height={300}
                        priority
                    />
                    <Typography>CCM at VT</Typography>
                </Box>
            </Box>}
            {<div style={{visibility: css as Visibility}}>{children}</div>}
        </div>
    )
}





