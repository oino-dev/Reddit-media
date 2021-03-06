import React, { Component } from 'react'
import s from './Home.module.scss'
import _ from 'lodash'
import PostList from '../Posts/PostsList'
import ButtonNext from '../UI/Buttons/ButtonNext'
import ButtonPrev from '../UI/Buttons/ButtonPrev'
import Search from '../UI/Search/Search'



export default class Home extends Component {



    constructor(props) {
        super(props)
        this.url = 'https://www.reddit.com/r/'
        this.sorts = ['hot', 'new', 'top', 'controversial', 'rising']
        this.subredditArray = ['cats', 'dogs']
        this.delay = 'top'
    }



    state = {
        currentSubreddit: 'cats',
        sort: 'top',
        sorts: ['hot', 'new', 'top', 'controversial', 'rising'],
        after: null,
        before: null,
        loading: true,
        page: 1,
        posts: [],
        favorite: []
    }
    componentDidMount() {
        this.renderMedia(this.state.currentSubreddit)
    }



    // Наполняем state из .JSON --------------start------------
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
    // Наполняем state из .JSON --------------end------------

    // Пледующая страница--------------start------------

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

    // Следующая страница--------------end------------

    // Предыдущая страница--------------start------------
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
    // Предыдущая страница--------------end------------
    // Добавить в избранное--------------start------------
    addToFavorite() {
        localStorage.setItem('post', JSON.stringify(this.state.posts.data.data.id))
    }
    // Добавить в избранное--------------end------------
    // Поиск  --------------start------------
    searchSubreddit(subreddit) {
        if (subreddit.length) {
            this.renderMedia(subreddit)
        } else {
            this.renderMedia(this.delay)
        }
    }
    // Поиск--------------end------------
    // Рендер контента --------------start------------
    render() {
        const searchSubreddit = _.debounce((term) => { this.searchSubreddit(term) }, 1000)
        let contentMedia
        if (this.state.posts.length > 0) {
            let pageNow
            const nextBtn = <ButtonNext onClick={this.clickButtonNextHandler} />
            const prevBtn = <ButtonPrev onClick={this.clickButtonPrevHandler} />
            if (this.state.before === null && this.state.after !== null) {
                pageNow = <div className={s.HomeButton}>{prevBtn} </div>
            }
            if (this.state.before === null && this.state.after !== null) {
                pageNow = <div className={s.HomeButton}>{nextBtn} </div>
            }
            if (this.state.after !== null && this.state.before !== null) {
                pageNow =
                    <div className={s.HomeButton}>{prevBtn}{nextBtn}</div>
            }
            contentMedia = <div >

                <PostList onSearch={term => searchSubreddit(term)} content={this.state.posts} changeSort={this.changeSort} sorting={this.state.sorts} />
                {pageNow}
            </div >
        } else contentMedia = <div className={s.noMedia}>Котиков слишком много....загружаю...</div>

        return (
            <React.Fragment>
                <main  >
                    {contentMedia}
                </main >
            </React.Fragment >
        )
    }
}
