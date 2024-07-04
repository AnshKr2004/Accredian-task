import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroSectionProps {
  handleOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleOpen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'url(/path-to-your-background-image.jpg) no-repeat center center/cover',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Refer & Earn
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
    </Box>
  );
};

export default HeroSection;
