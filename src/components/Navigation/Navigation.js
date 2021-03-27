import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

import ModalApp from '../ModalApp/'

const useStyles = makeStyles(theme => ({
  offsert: theme.mixins.toolbar,
  button: {
    margin: theme.spacing(1)
  },
  title: {
    marginLeft: 16,
    flex: 1
  },
}))

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            Anime-view
          </Typography>

          <ModalApp />
        </Toolbar>
      </AppBar>
      <div className={classes.offsert}></div>
    </div>
  )
}

export default Navigation