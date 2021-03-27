import React from 'react'

//components material
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions } from '@material-ui/core'

//components local
import ModalApp from '../ModalApp/'
import { ButtonDelete } from '../Buttons/'
import CardBody from './CardBody'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '10px',
      border: '4px solid',
      borderImageSlice: 1,
      borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)'
    },
    notPointer: {
      cursor: 'default'
    },
    btnCard: {
      display: 'flex',
      justifyContent: 'space-between'
    },
});


const CardAnime = ({ anime }) => {
    const classes = useStyles()

    return(
    <Card className={classes.root}>
        <CardBody 
          title={anime.title}
          image={anime.image}
          description={anime.description}
          capitulos={anime.capitulos}
          estado={anime.estado}
        />
      {/* </CardActionArea> */}
      <CardActions className={classes.btnCard}>
        {/* <ButtonEditar /> */}
        <ModalApp anime={anime} />

        <ButtonDelete id={anime.id} />
      </CardActions>
    </Card>
    )
}

export default CardAnime