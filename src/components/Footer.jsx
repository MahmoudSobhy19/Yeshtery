import React, { Component } from 'react';
import {FiSend} from 'react-icons/fi';
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai';
import  Cash from '../images/cash.png';
import  Visa from '../images/visa.jpg';
import  master from '../images/mastercard.png';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='footer'>
                <section className='container'>
                    <div className='subFooter'>
                        <div className='left'>
                            <h1>yeshtery</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. tenetur consequatur facilis non laudantium ut, magnam adipisci similique perspiciatis distinctio.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quos nemo praesentium ab cumque voluptatem. Culpa voluptate, delectus earum possimus laudantium aliquam fugit, error perspiciatis harum placeat et commodi eveniet quidem beatae vero praesentium adnatus quasi eius, eos alias itaque dolorem. </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum assumenda non dolore adipisci nemo. Quod quia debitis fugiat cupiditate.</p>
                        </div>
                        <div className='right'>
                            <p>Subscribe to our newsletter</p>
                            <div className='form'>
                                <input type="text" placeholder='Enter Your Mail'></input>
                                <button>Subscribe <FiSend className='icon'/></button>
                            </div>
                            <div className='nav'>
                                <div>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Conect Us</li>
                                        <li>Track Order</li>
                                        <li>Terms &amp; Conditions</li>
                                        <li>Privacy Policy</li>
                                        <li>Sell With Us</li>
                                        <li>Shipping And Returns</li>
                                    </ul>
                                </div>
                                <div className='icons'> 
                                    <div className='icon'>
                                        <AiFillFacebook className='face'/>
                                        <p>/YESHTERY</p>
                                    </div>
                                    <div className='icon'>
                                        <AiFillLinkedin className='linked'/>
                                        <p>/YESHTERY</p>
                                    </div>
                                    <div className='icon'>
                                        <AiFillInstagram className='insta'/>    
                                        <p>/YESHTERY</p>
                                    </div>
                                    <div className='icon'>
                                        <AiFillTwitterSquare className='tweet'/>
                                        <p>/YESHTERY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='copy-right'>
                        <div>&copy; 2021 yeshtery, all right reserved.</div>
                        <div>
                            <img src={Cash}/>
                            <img src={Visa}/>
                            <img src={master}/>
                        </div>
                        <div>Powered By <span>nasnav</span></div>
                    </div>
                </section>
            </footer>
        );
    }
}
 
export default Footer;