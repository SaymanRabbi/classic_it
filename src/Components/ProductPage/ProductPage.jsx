import React from 'react';
import Hero from '../Hero/Hero';
import Product from './Product';
import Testimonial from './Testimonial';

const ProductPage = () => {
    return (
        <div className=' bg-transparent'>
           <Hero/>
           <Product/>
           <Testimonial/>
        </div>
    );
};

export default ProductPage;