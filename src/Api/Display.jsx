import React, { useState } from "react";

export default function Display() {
    const [data, setdata] = useState({
        articles: [],
    });

    const getData = async () => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2025-08-20&to=2025-08-20&sortBy=popularity&apiKey=683ed18380584a16adb6252427c20aaa`;
        let data = await fetch(url);
        console.log(data)
        let newdata = await data.json();
        let articles = newdata.articles;
        setdata({
            articles: articles,
        });
    };

    return (
        <>
            <div className="container py-4">
                <button className="btn btn-outline-dark" onClick={getData}>
                    Load Data
                </button>
                <div className="row">
                    {data.articles.map((ele, index) => (
                        <div className="col-sm-3" key={index}>
                            <div className="card text-start">
                                <img
                                    className="card-img-top"
                                    src={
                                        ele.urlToImage
                                            ? ele.urlToImage
                                            : "https://static.feber.se/article_images/62/54/25/625425.jpeg"
                                    }
                                    alt="Title"
                                    style={{ height: "120px" }}
                                />
                                <div className="card-body">
                                    <h4 className="card-title">{ele.title}...</h4>
                                    <p className="card-text">{ele.description}</p>
                                    <a href={ele.url} className="btn btn-dark">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div >
            </div >
        </>
    );
}