import React from 'react'

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    div: {
        textAlign: 'center',
        border: '1px solid',
        padding: '4px',
        marginTop: '4px',
        color: 'white',
    },
    terminado: {
        background: '#34A853', //verder
        borderColor: '#34A853'
    },
    enProceso: {
        background: '#4285F4', //azul
        borderColor: '#4285F4'
    },
    noVisto: {
        background: '#EA4335', //azul
        borderColor: '#EA4335'
    }
})


const EstadoAnime = ({estado}) => {
    const classes = useStyles()

    const tipoEstadoText =  estado === 0 ? 'No visto' : (estado === 1 ? 'Terminado' : 'En proceso')

    const tipoEstadoStyle = estado === 0 
                        ? ` ${classes.noVisto}` 
                        : (estado === 1 ? ` ${classes.terminado}` : ` ${classes.enProceso}`)

    return(
        <div className={classes.div + tipoEstadoStyle}>
            <Typography component='p'>
                { tipoEstadoText }
            </Typography>
        </div>
    )
}

export default EstadoAnime