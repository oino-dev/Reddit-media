import React from 'react'
import s from './MenuToggle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const MenuToggle = (props) => {

    const styles = {
        icon: (props.isOpen ? faTimes : faBars),
        classes: (props.isOpen ? `${s.MenuToggle} ${s.open}` : s.MenuToggle)
    }

    return (
        <i onClick={props.onToggle}>
            <FontAwesomeIcon icon={styles.icon} className={styles.classes} size='sm'></FontAwesomeIcon>
        </i >
    )
}

export default MenuToggle
