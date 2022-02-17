import React, { Component } from 'react';
import Product from "../components/Product";
import SimilarProducts from '../components/SimilarProducts';
import Footer from '../components/Footer';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Product/>
                <SimilarProducts/>
                <Footer/>
            </>
        );
    }
}
 
export default Home;