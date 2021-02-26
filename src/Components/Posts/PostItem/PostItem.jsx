// import React from 'react'
// import s from './PostItem.module.scss'
// import { makeStyles } from '@material-ui/core/styles';

// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info'

// import FavoriteButton from '../../UI/Favorite/Favorite'

// const PostItem = ({ postslist }) => {

//     const useStyles = makeStyles((theme) => ({
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'space-around',
//             overflow: 'hidden',
//             backgroundColor: theme.palette.background.paper,
//         },
//         gridList: {
//             width: 500,
//             height: 450,
//         },
//         icon: {
//             color: 'rgba(255, 255, 255, 0.54)',
//         },
//     }));

//     const classes = useStyles();

//     if (postslist.data.preview) {
//         let postlink = 'https://www.reddit.com/' + postslist.data.permalink
//         return (
//             <div className={classes.root}>

//                 <GridListTile key={postslist.data.id}>
//                     <img src={postslist.data.url} alt={postslist.data.title} />

//                 </GridListTile>

//             </div >

//         )
//     }



//     return (

//         <div>

//         </div >
//     )
// }

// export default PostItem


//  <div className={s.card}>
//                 <div className={s.cardWrapper}>
//                     <div className={s.cardMedia}>
//                         <img src={postslist.data.url_overridden_by_dest} alt="" />
//                     </div>
//                     <div className={s.cardText}>
//                         <p>
//                             {postslist.data.title}
//                         </p>
//                         <div className="div">
//                             <h6>{postslist.data.author_flair_text}</h6>
//                             <h4>posted by <span>{postslist.data.author}</span> </h4>
//                             <h5>{postslist.data.subreddit_name_prefixed}</h5>
//                             <div className={s.cardAction}>
//                                 <a href={postlink} target="_blank" without rel="noreferrer"> show comment</a>
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//                 <FavoriteButton />
//             </div>