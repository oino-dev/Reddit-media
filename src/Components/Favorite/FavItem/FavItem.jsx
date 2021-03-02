import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FavCard from './FavCard/FavCard'


const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        width: '90%',
        margin: '0 auto',
        // flexGrow: 1
    },
    gridItem: {
        boxSizing: 'border-box',
        width: 400,
        height: 400,
        margin: 10,
        padding: 0,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    a: {
        color: "#fff",
        textDecoration: 'none',
        fontWeight: 'bold',
        letterSpacing: '0.05rem'

    }
}));




const PostsList = () => {

    const [spacing, setSpasing] = React.useState(2)
    const classes = useStyles();

    let postsArr = JSON.parse(localStorage.getItem('posts'))
    return (
        <Grid container justify='center' spacing={10} className={classes.root}>
            <Grid item xs={12} >
                <Grid container justify='center' spacing={spacing}>
                    {postsArr.map((post, index) => {
                        return (
                            <FavCard key={index} file={post} />
                        )
                    })}

                </Grid>

            </Grid>
        </Grid>
    )


}
export default PostsList
