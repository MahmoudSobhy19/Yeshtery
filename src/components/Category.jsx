import React, { Component } from 'react';

class Category extends Component {
    state = {  } 
    render() { 
        return (
            <header className='cat'>
                <nav className='category'>
                    <ul className='container flex'>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Unisex</li>
                        <li>Kids</li>
                        <li>Best Sellers</li>
                        <li>New Arrivals</li>
                        <li className='active'>Offers</li>
                    </ul>
                </nav>

                <div className='links flex container'>
                    <a href='#'>Men</a>
                    <p>/</p>
                    <a href='#'>Clothing</a>
                    <p>/</p>
                    <a href='#'>Tops</a>
                    <p>/</p>
                    <a href='#'>Adidas</a>
                    <p>/</p>
                    <p>Adidas Black T-Shirt</p>
                </div>
            </header>
        );
    }
}
 
export default Category;