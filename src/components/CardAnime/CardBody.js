import React from 'react'
import { CardMedia, CardContent, Typography, Divider, makeStyles } from '@material-ui/core'

//import notImage from './notImage.png'

//Components local
import EstadoAnime from '../EstadoAnime/'

const useStyles = makeStyles({
    scrollDescp: {
        height: '50px',
        maxHeight: '50px',
        overflow: 'auto'
    },
    dividerSpacing: {
        marginTop: '8px',
        marginBottom: '8px'
    },
    contEstado: {
        textAlign: 'center'
    }
})

const CardBody = ({ title, image, description, capitulos, estado }) => {
    const classes = useStyles()

    return (
        <>
            <CardMedia
                component="img"
                alt={title}
                height="200px"
                src={image === '' ? './notImage.png' : image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>

                <div className={classes.scrollDescp}>
                    <Typography variant="body1" color="textSecondary" component="p">
                    {description}
                    </Typography>
                </div>
                
                <Divider className={classes.dividerSpacing}/>
                <Typography variant="body1" color="textSecondary" component="p">
                    Número de capitulos: {capitulos}
                </Typography>
                <Divider className={classes.dividerSpacing}/>
                <Typography component='div' className={classes.contEstado}>
                    <Typography color="textPrimary" component="h5">
                        Estado
                    </Typography>
                </Typography>
                <Divider className={classes.dividerSpacing}/>
                <EstadoAnime estado={estado}/>
            </CardContent>
        </>
    )

}

export default CardBody