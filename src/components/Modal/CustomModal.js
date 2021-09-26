import * as React from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  minWidth:'400px',
  bgcolor:   'background.paper',
  p: 1,
};

export default function CustomModal(prop) {
  const {open , close , children } = prop;
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    
  );
}
