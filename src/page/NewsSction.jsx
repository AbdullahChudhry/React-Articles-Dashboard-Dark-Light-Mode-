import React, { Component } from "react";

export default class NewsSection extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=683ed18380584a16adb6252427c20aaa`;
        let res = await fetch(url);
        let data = await res.json();
        this.setState({ articles: data.articles });
    }

    render() {
        const { articles } = this.state;

        return (
            <div className="container my-5">
                {articles.length > 0 && (
                    <>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h2>{articles[0].title}</h2>
                                <p>{articles[0].description}</p>
                                <a
                                    href={articles[0].url}
                                    target="_blank"
                                    className="btn btn-dark"
                                >
                                    Read Post
                                </a>
                                <div className="text-muted mt-2">
                                    {articles[0].author} {" "}
                                    {new Date(articles[0].publishedAt).toDateString()}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    src={articles[0].urlToImage}
                                    alt="news"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>

                        <div className="row">
                            {articles.slice(9, 12).map((item, i) => (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={item.urlToImage}
                                            className="card-img-top"
                                            alt="news"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">
                                                {item.description
                                                    ? item.description.slice(0, 100) + "..."
                                                    : ""}
                                            </p>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                className="btn btn-dark"
                                            >
                                                Read Post
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
    }
}
