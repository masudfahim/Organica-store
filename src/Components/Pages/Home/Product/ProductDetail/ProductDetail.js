

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://secure-forest-48257.herokuapp.com/service/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    return (
        <div>
            <h2>hello{service.name}</h2>


        </div>
    );
};

export default ProductDetail;