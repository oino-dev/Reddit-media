import React from 'react'
import s from './Favorite.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FavoriteButton = (props) => {


    return (
        <i className={s.Favorite} onClick={props.toFavorite}>
            <FontAwesomeIcon icon={faStar} size='lg' />
        </i>
    )
}

export default FavoriteButton
