import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Button, Fab, Box } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

//Icons
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';

// const themeInit =  createMuiTheme({palette: {secondary: { main: '#f50057' } }})
import { ButtonEdit } from '../Buttons'

import FormApp from '../FormApp/'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fabClose: {
    position: 'absolute',
    margin: '10px 10px'
  }
}));

const ModalApp = ({ anime }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      { anime ? (
        <ButtonEdit open={handleOpen}/>
      ): (
        <Button size='medium' variant='contained' color='secondary' className={classes.button} startIcon={<AddIcon />} onClick={handleOpen}>
          Add anime
        </Button>
      )}
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box
              display='flex'
              justifyContent='flex-end'
            >
              <Fab className={classes.fabClose} color="primary" aria-label="add" size="small" onClick={handleClose}>
                <CloseIcon />
              </Fab>
            </Box>
            { anime ? (
              <FormApp anime={anime}/>
            ) : (
              <FormApp />
            ) }
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

ModalApp.defaultProps = {
  anime: null
}

export default ModalApp;