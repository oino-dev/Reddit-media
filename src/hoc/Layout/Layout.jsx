import React, { Component } from 'react'
import s from './Layout.module.scss';
import Drawer from '../../Components/Navigation/Drawer/Drawer'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle'


export default class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({ menu: false })
    }

    render() {
        return (
            <div className={s.Layout}>
                <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
