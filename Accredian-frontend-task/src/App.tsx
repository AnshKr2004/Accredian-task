import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CssBaseline />
      <Container>
        <HeroSection handleOpen={handleOpen} />
        <ReferralModal open={open} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default App;
