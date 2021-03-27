import React, { useContext, useEffect } from 'react'
import { Fab, makeStyles } from '@material-ui/core'

//icons
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles({
    btnEdit: {
        background: '#FBBC05',
        color: '#222'
    }
})

const ButtonEdit = ({ open }) => {
    const classes = useStyles()

    const handleOpen = async () => {
        open()
    }

    return(
        <Fab className={classes.btnEdit} size='small' color='primary' aria-label='edit' onClick={handleOpen}>
            <EditIcon />
        </Fab>
    )
}

export default ButtonEdit