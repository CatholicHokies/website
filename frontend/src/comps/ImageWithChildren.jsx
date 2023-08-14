// Write me something that will render an image
// and overlay some children on top of it.

// The image will work like any other image, taking in a src prop
// and rendering the image at that location.

import React from 'react'
import Box from '@mui/material/Box';

const default_height = "40vh"

export default function ImageWithChildren({ src, children}) {
    console.log(src)
    var phrase = "url(" + src + ")"
    return (
        <Box className = "imageBox" sx={{backgroundImage : phrase}}>
            <Box className = "smartMargin">
                {children}
            </Box>
        </Box>
    )
}


