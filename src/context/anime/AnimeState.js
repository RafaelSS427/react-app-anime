import React, { useReducer } from 'react'

import AnimeContext from './AnimeContext'
import AnimeReducer from './AnimeReducer'


const AnimeState = ({ children }) => {
    const [ state, dispatch ] = useReducer(AnimeReducer, {
        animeList: [],
        requesData: new Date()
    })

    const getAnimes = async() => {
        const resp = await fetch('http://localhost:4000/animes')
        const data = await resp.json()

        dispatch({
            type: 'GET_ANIMES',
            payload: data
        })
    }

    const handleTrigger = () => {
        dispatch({
            type: 'TRIGGER',
            payload: new Date()
        })
    }

    return(
        <AnimeContext.Provider value={{
            animeList: state.animeList,
            requesData: state.requesData,
            getAnimes,
            handleTrigger
        }}>
            { children }
        </AnimeContext.Provider>
    )
}

export default AnimeState