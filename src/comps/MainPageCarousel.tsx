import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import Box from '@mui/material/Box';

const images_for_carousel = ["./images/adoration1.jpg", 
                            "./images/bonding.jpg",
                            "./images/Football.jpg",
                            "./images/house.jpg",
                            "./images/leadership1.jpg",
                        ]


// Utilizes https://www.npmjs.com/package/react-responsive-carousel

class MainPageCarousel extends Component {
    render() {
        return (
            <Box>
                <Carousel autoPlay showStatus={false} emulateTouch infiniteLoop showThumbs={false}>
                    {images_for_carousel.map((image) => {
                        return (
                            <Box className="carouselClipper" key={image}>
                                <Image src={image} alt={image} width={1000} height = {500} />
                            </Box>
                        )
                    }
                    )}
                </Carousel>
            </Box>
        );
    }
};

export default MainPageCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>