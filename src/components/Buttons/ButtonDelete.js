import React, { useContext } from 'react'

import { Fab, makeStyles } from '@material-ui/core'

//icons
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

//Components local
import AnimeContext from '../../context/anime/AnimeContext'

const useStyles = makeStyles({
    btnDelete: {
        background: '#EA4335'
    }
})

const ButtonDelete = ({id}) => {
    const { handleTrigger } = useContext(AnimeContext)
    const classes = useStyles()

    const handleDelete = async () => {
        await fetch(`http://localhost:4000/animes/${id}`, {
            method: 'DELETE',
        });

        handleTrigger();
    }

    return(
        <Fab className={classes.btnDelete} size='small' color='secondary' aria-label='delete' onClick={handleDelete}>
          <DeleteForeverIcon />
        </Fab>
    )
}

export default ButtonDelete