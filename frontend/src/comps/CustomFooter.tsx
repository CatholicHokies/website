import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box className = "smartPadding" sx={{backgroundColor : "primary.main"}}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Find Us
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          540.951.0032 |
          203 Otey St. |
          Blacksburg, VA 24060 |
          Director@CatholicHokie.org
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          Our Mission is to support, challenge and inspire students, faculty and staff to grow in faith and live out their call to be true disciples of Christ on campus and in their daily lives. Founded on Christ’s teachings and the Eucharist we prepare Catholic leaders for service to the Church and world through the pillars of faith, community, and service.
        </Typography>
      </Box>

      <Box>
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
        Bishop Knestout encourages anyone aware of sexual abuse of minors on the part of clergy or staff of our diocese to notify civil authorities, call the Attorney General’s Clergy Abuse Hotline at 1-833-454-9064, and reach out to the Diocesan Victim Assistance Program at 1-877-887-9603.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
