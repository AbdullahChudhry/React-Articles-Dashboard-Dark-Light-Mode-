import React, { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    const getData = async () => {
        try {
            let response = await fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
                    "x-rapidapi-key": "aceac8290fmshb43bb1e38e58cfbp1b93efjsn135d64e1e05b",
                },
            });

            let data = await response.json();
            console.log(data);
            setMovies(data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }

    };

    return (
        <div style={{ padding: "20px" }}>
            <button onClick={getData}>Load Movies</button>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
                {movies.map((movie, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
                        <img
                            src={movie.image ? movie.image : "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64aaa4a0db0b1d001d7f727f.jpg"}
                            alt={movie.title}
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <h3>{movie.title}</h3>
                        <p><b>Rating:</b> {movie.rating}</p>
                        <p><b>Year:</b> {movie.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
