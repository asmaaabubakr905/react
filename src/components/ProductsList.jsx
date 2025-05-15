import React from 'react'
import { useState } from 'react';
import productsData from '../productsData'
function ProductsList() {
    //search
    const [search, setSearch] = useState("");
    let filteredProducts = productsData.filter((product) => {
        return product.title.includes(search);
    });
    //Filtercategory
    const [category, setCategory] = useState("all");
    if (category !== "all") {
        filteredProducts = filteredProducts.filter((product) => {
            return product.category == category;
        });
    }
    //sort
    const [sort, setSort] = useState("lowToHigh");
    if (sort == "lowToHigh") {
        filteredProducts = filteredProducts.sort((a, b) => {
            return a.price - b.price;
        });
    }
    else if (sort == "highToLow") {
        filteredProducts = filteredProducts.sort((a, b) => {
            return b.price - a.price;
        });
    }

    //draw
    const products = filteredProducts.map((product) => {
        return (
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container my-5">
            <div className="row">
                <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='search'></input>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">all</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                    <option value="men's clothing">men's clothing</option>
                </select>
                <select onChange={(e) => setSort(e.target.value)}>
                    <option value="lowToHigh">low To High</option>
                    <option value="highToLow">high To Low</option>
                </select>

                {products}
            </div>
        </div>
    );
}

export default ProductsList;