import React, { Component } from 'react'
import styled from 'styled-components'
import FavItem from './FavItem/FavItem'

const StyledH1 = styled.h1`
margin:0;
letter-spacing: 0.1rem;
`


const ContainerDiv = styled.div`
display: flex;
justify-content: center;
width:100%;
height:100vh;
/* background-color: red; */
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



    // Добавить в избранное--------------start------------
    addToFavorite = () => {
        let posts = JSON.parse(localStorage.getItem('posts'))
        posts.forEach(function (post, index) {
            console.log(post.id);
        })
        let post = JSON.parse(localStorage.getItem('posts'))
        posts.push(post)

        localStorage.setItem('posts', JSON.s)



    }
    // Добавить в избранное--------------end------------






    render() {
        let content
        let checkStorage = localStorage.getItem('posts')
        if (checkStorage !== null) {
            content = <FavItem />
        } else {

            content =
                <StyledH1>
                    <h5>Вы ничего не добавили в избраное :(</h5>
                </StyledH1>

        }


        return (
            <ContainerDiv>
                {content}

                {/* {content} */}
            </ContainerDiv>



        )
    }
}
