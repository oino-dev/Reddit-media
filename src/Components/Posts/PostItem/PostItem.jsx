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
    // console.log('props', props.isFavorite);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const favObj =

    {
        id: props.data.data.id,
        url: props.data.data.url,
        title: props.data.data.title,
        video: props.data.data.is_video,
        videoUrl: (props.data.data.is_video) ? props.data.data.media.reddit_video.fallback_url : ''

    }


    const addToFavorite = () => {

        let posts = JSON.parse(localStorage.getItem('posts') || '[]')
        // posts.forEach(function (post, index) { console.log(post.id); })
        posts.push(favObj);
        localStorage.setItem('posts', JSON.stringify(posts))
        console.log(posts);

        // let serialObj = localStorage.setItem('posts', JSON.stringify(favObj))

        // let returnObj = JSON.parse(localStorage.getItem('posts') || [])
        // returnObj.push(serialObj)
        // console.log('return', returnObj);
    }





    return (
        <Card className={classes.root}>
            <CardHeader
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
                <IconButton aria-label="add to favorites" onClick={addToFavorite}>
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