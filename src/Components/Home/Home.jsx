import React, { Component } from 'react'
import s from './Home.module.scss'
import PostList from '../Posts/PostsList'
import ButtonNext from '../UI/Buttons/ButtonNext'
import ButtonPrev from '../UI/Buttons/ButtonPrev'




export default class Home extends Component {



    constructor(props) {
        super(props)
        this.url = 'http://www.reddit.com/r/'
        this.sorts = ['hot', 'new', 'top', 'controversial', 'rising']
        this.subredditArray = ['cats', 'dogs']
    }



    state = {
        currentSubreddit: 'cats',
        sort: 'top',
        after: null,
        before: null,
        loading: true,
        page: 1,
        posts: []
    }
    componentDidMount() {
        this.renderMedia(this.state.currentSubreddit)
    }



    // !Наполняем state из .JSON --------------start------------

    renderMedia(sub) {

        this.setState({
            posts: [],
            currentSubreddit: sub,
            page: 1
        })

        fetch(this.url + sub + '/' + this.state.sort + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    posts: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                })
                window.scroll(0, 0)
            })
    }
    // !Наполняем state из .JSON --------------end------------
    // *
    // *
    // *
    // * 
    // * 
    // *
    // !Следующая страница--------------start------------

    clickButtonNextHandler = () => {

        fetch(this.url + this.state.currentSubreddit + '/' + this.state.sort + '.json?count=' + (this.state.page * 25) + '&after=' + this.state.after)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    posts: data.data.children,
                    after: data.data.after,
                    before: data.data.before,
                    page: this.state.page + 1
                })
                window.scrollTo(0, 0)
            })
    }

    // !Следующая страница--------------end------------
    // *
    // *
    // *
    // * 
    // * 
    // *
    // !Предыдущая страница--------------start------------
    clickButtonPrevHandler = () => {

        fetch(this.url + this.state.currentSubreddit + '/' + this.state.sort + '.json?count=' + (((this.state.page - 1) * 25) - 1) + '&before=' + this.state.after)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    posts: data.data.children,
                    after: data.data.after,
                    before: data.data.before,
                    page: this.state.page - 1
                })
                window.scrollTo(0, 0)
            })
    }




    // !Предыдущая страница--------------end------------

    // *
    // *
    // *
    // * 
    // * 
    // *
    // !Рендер контента --------------start------------
    render() {


        let contentMedia
        if (this.state.posts.length > 0) {
            contentMedia = <div > <PostList content={this.state.posts} /></div>
        } else contentMedia = <div className={s.noMedia}>Котиков слишком много....загружаю...</div>

        return (
            <React.Fragment>
                <main  >
                    {contentMedia}
                </main >
                <div className={s.HomeButton}>
                    <ButtonPrev onClick={this.clickButtonPrevHandler} />
                    <ButtonNext onClick={this.clickButtonNextHandler} />
                </div>
            </React.Fragment >
        )
    }
}
