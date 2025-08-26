import React, { Component } from 'react'
import "./prac.css"

export default class Prac extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            pageSize: 6,
            totalResults: 0,

        };

    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=683ed18380584a16adb6252427c20aaa&page=${this.state.page}&pageSize=${this.state.pageSize}`
        let response = await fetch(url)
        let data = await response.json()
        let newData = data.articles;
        console.log(newData)
        this.setState({
            articles: newData,
            page: 1,
            totalResults: data.totalResults,
        })
    }

    render(


    ) {
        const handleNext = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=683ed18380584a16adb6252427c20aaa&page=${this.state.page}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let newdata = await data.json();
            let news = newdata.articles;
            this.setState({
                articles: news,
                page: this.state.page + 1,
            });
        };

        const handlePrevious = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=683ed18380584a16adb6252427c20aaa&page=${this.state.page}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let newdata = await data.json();
            let news = newdata.articles;
            this.setState({
                articles: news,
                page: this.state.page - 1,
            });
        };
        // Calculate total number of pages
        let totalPages = Math.ceil(this.state.totalResults / this.state.pageSize);
        return (
            <>
                <div className='con'>
                    {
                        this.state.articles.map((e, index) => (
                            <div className='upper' key={index}>
                                <div className='author'>
                                    <small className='fs-6'><b>Author: </b><i>{e.author}</i></small>
                                </div>
                                <div className='publish'>
                                    <small><b>Publisher: </b><i>{e.publishedAt}</i></small>
                                </div>

                                <h3>{e.title.slice(0, 24)}...</h3>
                                <div className='card1'>
                                    <img src={e.urlToImage} alt="urltoimage" />
                                    <p>{e.description}</p>

                                </div>
                                <div className='link1'>
                                    <a href={e.url} className='btn btn-dark'>Read More</a>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="arr">
                    <button className="" onClick={handlePrevious} disabled={this.state.page <= 1}>&larr;</button>
                    <button className="" onClick={handleNext} disabled={this.state.page >= totalPages}>
                        &rarr;
                    </button>
                </div>
            </>
        )
    }
}
