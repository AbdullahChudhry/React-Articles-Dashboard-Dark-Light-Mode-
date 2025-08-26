import React, { Component } from "react";

export default class GetApi extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            pageSize: 33,
            totalResults: 0,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2025-08-20&to=2025-08-20&sortBy=popularity&apiKey=683ed18380584a16adb6252427c20aaa&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let newdata = await data.json();
        let news = newdata.articles;
        this.setState({
            articles: news,
            page: 1,
            totalResults: newdata.totalResults,

        });
    }



    render() {
        const handleNext = async () => {
            let url = `https://newsapi.org/v2/everything?q=apple&from=2025-08-20&to=2025-08-20&sortBy=popularity&apiKey=683ed18380584a16adb6252427c20aaa&page=${this.state.page}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let newdata = await data.json();
            let news = newdata.articles;
            this.setState({
                articles: news,
                page: this.state.page + 1,
            });
        };

        const handlePrevious = async () => {
            let url = `https://newsapi.org/v2/everything?q=apple&from=2025-08-20&to=2025-08-20&sortBy=popularity&apiKey=683ed18380584a16adb6252427c20aaa&page=${this.state.page}&pageSize=${this.state.pageSize}`;
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
                <div className="container">
                    <div className="row">
                        {this.state.articles && this.state.articles.map((ele, index) => (
                            <div className="col-4 border mt-2 py-2" key={index}>
                                <div className="row">
                                    <div className="col-6">
                                        <small>
                                            Author :{" "}
                                            <span className="badge bg-dark">
                                                {ele.author ? ele.author.slice(0, 30) : "Coders"}
                                            </span>
                                        </small>
                                    </div>
                                    <div className="col-6">
                                        <small>
                                            Published at :{" "}
                                            <span className="badge bg-dark">{ele.publishedAt}</span>
                                        </small>
                                    </div>
                                </div>
                                <h3 className="mt-2">{ele.title.slice(0, 30)}...</h3>
                                <hr />
                                <div className="d-flex gap-2">
                                    <img
                                        src={
                                            ele.urlToImage
                                                ? ele.urlToImage
                                                : "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2025/03/20/1742495653-alfredo-altavilla-byd.jpg?_=1742495653"
                                        }
                                        alt=""
                                        className="img-fluid"
                                        style={{ height: "120px" }}
                                    />
                                    <small>{ele.description}...</small>
                                </div>
                                <small>{ele.content}...</small>
                                <br />
                                <a href={ele.url} className="btn btn-dark">
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-dark text-light" onClick={handlePrevious} disabled={this.state.page <= 1}>&larr;</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark text-light" onClick={handleNext} disabled={this.state.page >= totalPages}>
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}