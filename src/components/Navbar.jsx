import React, { Component } from 'react';
import { GoThreeBars } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <header className='header'>
                <nav className='navbar container flex'>
                    <div className='logo flex'>
                        <GoThreeBars/>
                        <img src="/images/logo.jpg"/> 
                    </div> 

                    <div className='offers flex'>
                        <IoIosArrowBack/>
                        <p> Valentine's Day Offers! Buy Two Get One Free </p>
                        <a href="#">Shop Now</a>
                        <IoIosArrowForward/>
                    </div>

                    <div className='flex'>
                        <div className='service flex'>
                            <FiPhoneCall/>
                            <p>Contact Us</p>
                        </div>

                        <div className='service flex'>
                            <AiOutlineShoppingCart/>
                            <p>Track Order</p>
                        </div>

                        <div className='service flex'>
                            <IoLocationSharp/>
                            <p>Find A Store</p>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
 
export default Navbar;