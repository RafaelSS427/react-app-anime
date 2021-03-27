import { Container, Box } from '@material-ui/core'
import React from 'react'

//Components
import Navigation from './components/Navigation/'
import ListAnime from './components/ListAnime/'
import AnimeState from './context/anime/AnimeState'

const App = () => {
  return(
    <AnimeState>
      <Navigation />
      <Box padding={4}>
        <Container>

          <ListAnime />

        </Container>
      </Box>
    </ AnimeState>
  )
}

export default App