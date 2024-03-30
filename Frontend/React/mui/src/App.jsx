import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicTimeline from './Components/Timeline';
import Galery from './Components/Galery';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Navbar />
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Davomad
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bugun negadur o'quvchilar kelishmadi sababi noma'lum
          </Typography>
        </Box>
      </Modal>
      <BasicTimeline />
      <Galery />
    </>
  );
}

export default App;
