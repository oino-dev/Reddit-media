import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const ButtonNext = (props) => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Button variant="contained" color="primary">
                <ArrowBack />  Назад
            </Button>
        </div>

    )
}

export default ButtonNext



