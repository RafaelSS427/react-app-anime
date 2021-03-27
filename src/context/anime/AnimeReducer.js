import { GET_ANIMES, TRIGGER, GET_ANIME } from '../types'

export default (state, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_ANIMES:
            return {
                ...state,
                animeList: payload
            }

        case TRIGGER: 
            return {
                ...state,
                requesData: payload
            }
    }
}