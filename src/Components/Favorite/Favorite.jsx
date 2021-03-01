import React, { Component } from 'react'
import styled from 'styled-components'
import FavItem from './FavItem/FavItem'

const StyledH1 = styled.h1`
margin:0;
background-color: transparent;
`


const ContainerDiv = styled.div`
display: flex;
justify-content: center;
width:100%;
height:100vh;
align-items: center;
flex-direction:column;
`





export default class Favorite extends Component {


    constructor(props) {
        super(props)
        this.url = 'http://www.reddit.com/r/'
        this.sorts = ['hot', 'new', 'top', 'controversial', 'rising']
        this.subredditArray = ['cats', 'dogs']
    }



    state = {
        currentSubreddit: 'cats',
        sort: 'top',
        posts: [],
    }


    renderMedia = () => {
        fetch(this.url + this.state.currentSubreddit + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    posts: data.data.children,
                })
            })
    }


    render() {
        let content = <div> <FavItem files={this.state.posts} /> </div>

        return (
            <ContainerDiv>
                <StyledH1>
                    Здесь должны быть избранные посты
                </StyledH1>
                {content}
            </ContainerDiv>



        )
    }
}
