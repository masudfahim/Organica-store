import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ service }) => {
    const { _id, name, img, description, price, quantity } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Price: {price}</p>

            <p>Quantity:{quantity}</p>
            <p>Description:<small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Product;