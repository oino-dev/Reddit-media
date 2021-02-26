import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1200,
        height: '100%'

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



const PostsList = ({ content }) => {

    const classes = useStyles();

    if (content) {
        return (
            <div className={classes.root}>
                <GridList cellHeight={380} cols={3} className={classes.gridList}>
                    {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto', width: '100%' }}>
                        <ListSubheader component="div">Clone reddit content</ListSubheader>
                    </GridListTile> */}
                    {content.map((tile) => {
                        if (tile.data.preview) {
                            return (

                                <GridListTile key={tile.data.id}>
                                    {tile.data.is_video === false
                                        ? <img src={tile.data.url} alt={tile.data.author} />
                                        : <video controls autoplay='true' loop
                                            src={tile.data.media.reddit_video.fallback_url}
                                        >

                                        </video>
                                    }
                                    <GridListTileBar
                                        title={tile.data.title}
                                        subtitle={<span>posted by: <a
                                            href={'https://www.reddit.com/user/' + tile.data.author} t
                                            target="_blank"
                                            rel="noreferrer"
                                            className={classes.a}
                                        > {tile.data.author}
                                        </a></span>}
                                        actionIcon={
                                            <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                                <StarBorderIcon />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            )
                        }
                    }
                    )}
                </GridList>
            </div>
        )
    }

    return (
        <div>

        </div>
    )
}
export default PostsList
