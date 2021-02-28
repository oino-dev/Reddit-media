import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'
import s from './Drawer.module.scss'


const links = [
    { to: '/', label: 'Главная', exact: true },
    { to: '/favorite', label: 'Избранное', exact: false },
]


export default class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={s.active}
                        onClick={this.clickHandler}
                        component={this.component}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })

    }



    render() {
        const cls = [s.Drawer]
        if (!this.props.isOpen) {
            cls.push(s.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}
