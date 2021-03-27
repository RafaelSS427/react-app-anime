import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Card, CardContent, Box, MenuItem, Button, Collapse, Typography, Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import { Alert } from '@material-ui/lab'
import * as Yup from 'yup'

//Componentes locales
import InputForm from './InputForm'
import AnimeContext from '../../context/anime/AnimeContext'
import CardBody from '../CardAnime/CardBody'

//estados lista
import { estados } from './estados'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(3.5),
        width: '35ch',
        },
    },
    spacingAlert: {
        margin: '15px 15px'
    },
    styleGrid: {
        overflow: 'auto'
    }
}));

let timeout;

const FormApp = ({ anime }) => {
    const { handleTrigger } = useContext(AnimeContext)

    const formik = useFormik({
        initialValues: {
            title: anime ? anime.title : '',
            description: anime ? anime.description : '',
            capitulos: anime ? anime.capitulos : 0,
            estado: anime ? anime.estado : 0,
            image: anime ? anime.image : ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Tiene que agregar el titulo del anime'),
            description: Yup.string().required('La descripción no puede ir vacía'),
            capitulos: Yup.number().min(1, 'El anime debe de tener al menos 1 capitulo'),
            image: Yup.string().required('Favor insertar link de imagen')
        }),
        onSubmit: async (values, actions) => {
            values.date = new Date().toISOString().slice(0, 19).replace('T', ' ')

            const url = anime ? `http://localhost:4000/animes/${anime.id}` : 'http://localhost:4000/animes'

            const resp = await fetch(url, {
                method: anime ? 'PUT' : 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            const data = await resp.json()

            if(data){
                viewAlert()
                handleTrigger()
            }

            if(!anime){
                actions.resetForm()
            }
        }
    })
    const [ controllerSave, setControllerSave ] = useState(false)

    const classes = useStyles()

    const viewAlert = () => {
        setControllerSave(true)
        timeout = setTimeout(() => {
            setControllerSave(false)
        }, 4000);
    }

    useEffect(() => {

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <Grid container spacing={4}>
            {/* container spacing={4} justify="center" */}
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component='h4'>
                            { anime ? 'Edit Anime' : 'Add New Anime' }
                        </Typography>
                        <Collapse className={classes.spacingAlert} in={controllerSave}>
                            <Alert onClose={() => setControllerSave(false)}>
                                { anime ? 'Anime actualizado exitosamente' : 'Anime guardado exitosamente' }
                            </Alert>
                        </Collapse>
                        <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
                            <div>
                                <InputForm name='title' formik={formik}/>
                            </div>
                            
                            <div>
                                <InputForm name='description' formik={formik} multiline/>
                            </div>

                            <div>
                                <InputForm name='capitulos' formik={formik} type='number' />
                            </div>

                            <div>
                                <TextField
                                    fullWidth 
                                    name="estado" 
                                    select 
                                    label="Estado" 
                                    helperText="Favor selecciona el estado actual del anime"
                                    value={formik.values.estado}
                                    onChange={formik.handleChange}
                                    >
                                    {estados.map(({ id, type }) => (
                                        <MenuItem key={id} value={id}>
                                            {type}
                                        </MenuItem>
                                        )
                                    )}
                                </TextField>
                            </div>
                            
                            <div>
                                <InputForm name='image' formik={formik} />
                            </div>

                            <div>
                                <Button type='submit' fullWidth color='primary' variant='contained'>
                                    { anime ? 'Editar' : 'Agregar' }
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card> 
                    <CardBody 
                        title={formik.values.title}
                        image={formik.values.image}
                        description={formik.values.description}
                        capitulos={formik.values.capitulos}
                        estado={formik.values.estado}
                    />
                </Card>
            </Grid>
        </Grid>
        
    );
}

FormApp.defaultProps = {
    anime: null
}

export default FormApp