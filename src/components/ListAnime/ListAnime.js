import React, { useState, useEffect, useContext } from 'react'

import { makeStyles, Grid } from '@material-ui/core'

import AnimeContext from '../../context/anime/AnimeContext'
import CardAnime from '../CardAnime/'

const useStyles = makeStyles({
    root: {
        flexGrow: '1',
    },
    styleGrid: {
        minHeight: '100vh'
    }
})

const ListAnime = () => {
    const { animeList, getAnimes, requesData } = useContext(AnimeContext)

    const classes = useStyles()

    useEffect(() => {
        getAnimes()
    }, [ requesData ])

    return(
        <Grid container spacing={0} justify='center' className={classes.styleGrid}>
            { animeList.map(anime => (
                <Grid item key={anime.id}>
                    <CardAnime anime={anime} />
                </Grid>
            )) }
        </Grid>
    )
}

export default ListAnime