"use client";

import LogoPopup from '@/comps/LogoPopup';
import MainPageCarousel from '@/comps/MainPageCarousel';
import ImageWithChildren from '@/comps/ImageWithChildren';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PageTemplate from '@/comps/PageTemplate';

// Import theme provider

export default function Home() {
  return (
    <LogoPopup>
      <PageTemplate>
        <MainPageCarousel></MainPageCarousel>
        <ImageWithChildren src="/images/house.jpg">
          <Typography className="background_white" color="black">Welcome Hokies</Typography>
          <Typography className="background_white" color="black">Catholic Campus Ministry</Typography>
          <Typography className="background_white" color="black">Whether you are a new parent, a returning alumni, or a member of our community, we are excited to meet you and help you to feel at home. Stay up to date and ge connected by joining our newsletter!</Typography>
          <Button variant="contained">Join the Newsletter!</Button>
        </ImageWithChildren>
      </PageTemplate>
    </LogoPopup>
  )
}
