import React, { Component } from 'react';
import { data } from "../services/data";
import Sliderimg from './Sliderimg';
import StarRatings from 'react-star-ratings';
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Category from "../components/Category";
import Image360 from "../images/images.jpg";


class Product extends Component {
    constructor (props){
        super(props);
        this.state = {
            productQuantity: 1,
            itemCount: 0
        };
    }

    increment = () => {
        this.setState({
            productQuantity: this.state.productQuantity <= 9 ? this.state.productQuantity + 1 : 10
        })
    }

    decrement = () => {
        this.setState({
            productQuantity: this.state.productQuantity > 0 ? this.state.productQuantity - 1 : 0
        });;
    }

    addItem = () => {
        this.setState({
            itemCount: this.state.itemCount + this.state.productQuantity
        })
    }

    render() { 
        return (
            <>
            <Navbar/>
            <Search selectedProduct={data[0].selectedProduct} productQuantity={this.state.productQuantity} itemCount={this.state.itemCount}/>
            <Category/>
            <section className='product container'>
                <div className='left'>
                    <img src={data[0].selectedProduct.img[2]} alt='Product Image'/>
                    <img className='img360' src={Image360} alt='Product Image'/>
                    <Sliderimg img={data[0].selectedProduct.img}/>
                </div>
                <div className='right'>
                    <div>
                        <img src={data[0].selectedProduct.logo} alt="logo"/>
                        <h4>{data[0].selectedProduct.description}</h4>
                        <h4 className='cat'>{data[0].selectedProduct.category}</h4>
                        <div className='Rating flex'>
                            <StarRatings
                                rating={data[0].selectedProduct.rate}
                                starRatedColor="orange"
                                numberOfStars={5}
                                name='rating'
                                starDimension={20}
                                starSpacing={1}
                            />
                            <p className='rate'>{data[0].selectedProduct.rate} of 5</p>
                            <p className='numofrate'>{data[0].selectedProduct.nomOfRates} Rates</p>
                        </div>
                        <div className='price flex'>
                            <h2>{data[0].selectedProduct.salePrice}<span> LE</span></h2>
                            <del>{data[0].selectedProduct.price}LE</del>
                            <p>{data[0].selectedProduct.salePercent}% Off</p>
                        </div>
                    </div>

                    {/* Size */}
                    <div className='size '>
                        <h3>Size</h3>
                        <div className='size-cont flex'>
                            {
                                data[0].selectedProduct.size.map(el => {
                                    return <div className='flex' id={el} key={el}>{el}</div>
                                })
                            }
                        </div>
                    </div>

                    {/* color */}
                    <div className='color'>
                        <h3>Color</h3>
                        <div className='color-cont flex'>
                            {
                                data[0].selectedProduct.color.map(el => {
                                    return <div className='flex' id={el} key={el}></div>
                                })
                            }
                        </div>
                    </div>

                    {/* quantity */}
                    <div className='Quantity'>
                        <h3>Quantity</h3>
                        <div className='qty flex'>
                            <button onClick={() => this.decrement()}>-</button>
                            <input type="text" className="quantityInput" value={this.state.productQuantity} />
                            <button onClick={() => this.increment()}>+</button>
                        </div>
                        <div className='btn flex'>
                            <button className='cartbtn' onClick={() => { this.addItem() }}>Add To Cart</button>
                            <button className='storebtn'>Pickup From Store</button>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
 
export default Product;