import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostItem from './PostItem/PostItem'
import Search from '../UI/Search/Search'


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



const PostsList = ({ content, onSearch }) => {

    console.log('onSearch', onSearch);
    const [spacing, setSpasing] = React.useState(2)
    const classes = useStyles();

    if (content) {
        return (
            <Grid container justify='center' spacing={10} className={classes.root}>
                <Search onSearch={onSearch} />
                {/* <SortMenu onClick={changeSort} sorting={sort} /> */}
                <Grid item xs={12} >
                    <Grid container justify='center' spacing={spacing}>

                        {content.map((tile) => {
                            if (tile.data.preview) {
                                return (
                                    <PostItem key={tile.data.id} data={tile} content={content} />
                                )
                            }
                        }
                        )}
                    </Grid>

                </Grid>
            </Grid>
        )
    }

    return (
        <div>

        </div>
    )
}
export default PostsList
