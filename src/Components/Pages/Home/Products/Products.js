import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secure-forest-48257.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Products</h1>
                <div className="services-container">
                    {
                        Products.map(service => <Product
                            key={service._id}
                            service={service}
                        >
                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;