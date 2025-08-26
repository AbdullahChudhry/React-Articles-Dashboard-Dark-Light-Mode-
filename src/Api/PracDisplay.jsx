
import React, { useState } from 'react';

export default function PracDisplay() {
    const [product, setProduct] = useState(null);

    const getData = async () => {
        let url = "https://real-time-amazon-data.p.rapidapi.com/product-details?asin=B07ZPKBL9V&country=US&rapidapi-key=aceac8290fmshb43bb1e38e58cfbp1b93efjsn135d64e1e05b";

        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data);
        setProduct(data.data)


    }
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <button onClick={getData}>Show Product</button>

            {product && (
                <div
                    style={{
                        marginTop: "20px",
                        maxWidth: "900px",
                        marginInline: "auto",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <h2>{product.product_title}</h2>
                    <img
                        src={product.product_photo}
                        alt={product.product_title}
                        style={{ width: "200px", borderRadius: "10px", margin: "10px 0" }}
                    />

                    {/* Card Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "15px",
                            marginTop: "20px",
                        }}
                    >
                        <div style={cardStyle}><strong>ASIN:</strong> {product.asin}</div>
                        <div style={cardStyle}><strong>Price:</strong> ${product.product_price}</div>
                        <div style={cardStyle}><strong>Original Price:</strong> {product.product_original_price}</div>
                        <div style={cardStyle}><strong>Star Rating:</strong> {product.product_star_rating}</div>
                        <div style={cardStyle}><strong>Ratings Count:</strong> {product.product_num_ratings}</div>
                        <div style={cardStyle}><strong>Availability:</strong> {product.product_availability}</div>
                        <div style={cardStyle}><strong>Delivery:</strong> {product.delivery}</div>
                        <div style={cardStyle}><strong>Sales Volume:</strong> {product.sales_volume}</div>
                        <div style={cardStyle}><strong>Byline:</strong> {product.product_byline}</div>
                        <div style={cardStyle}><strong>Description:</strong> {product.product_description}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
const cardStyle = {
    background: "#f9f9f9",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    textAlign: "left",
};
