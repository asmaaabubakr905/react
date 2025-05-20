import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../axiosConfig';

function ProductDet() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance.get(`https://www.googleapis.com/books/v1/volumes?q=${id}`).then(res => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const book = product.items && product.items[0]; 
  const info = book?.volumeInfo;

  if (!info) {
    return <p>No book data found.</p>;
  }

  return (
    <div className="container my-5">
      <div className="card">
        <img src={info.imageLinks?.thumbnail} className="card-img-top" alt={info.title} style={{ maxWidth: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text">{info.authors?.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDet;