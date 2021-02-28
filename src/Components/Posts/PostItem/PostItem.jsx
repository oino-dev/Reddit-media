import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 15,
    },
    media: {
        width: 400,
        height: 400,
        // paddingTop: '56.25%',

    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));




const PostItem = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader


                // title="Shrimp and Chorizo Paella"
                subheader={props.data.data.subreddit_name_prefixed}
            />
            <CardMedia
                component={(props.data.data.is_video === false) ? 'img' : 'video'}
                className={classes.media}
                image={(props.data.data.is_video === false) ? props.data.data.url : ''}
                src={(props.data.data.is_video !== false) ? props.data.data.media.reddit_video.fallback_url : ''}
                title="Paella dish"
                autoPlay
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    posted by {props.data.data.author}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => {
                    localStorage.setItem('posts', JSON.stringify([
                        { id: props.data.data.id },
                        { url: props.data.data.url },
                        { title: props.data.data.title },

                    ]))
                }}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{props.data.data.title}</Typography>

                </CardContent>
            </Collapse>
        </Card >
    );
}
export default PostItem