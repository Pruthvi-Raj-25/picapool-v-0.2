import React from 'react';
import './footer.css';
import insta from "C:\\Users\\asamp\\Desktop\\Picapool\\client\\src\\assets\\insta.png"
import In from "C:\\Users\\asamp\\Desktop\\Picapool\\client\\src\\assets\\LinkedIn.svg" 
import X from "C:\\Users\\asamp\\Desktop\\Picapool\\client\\src\\assets\\X.svg"
import  picapool_logo from './picapool_logo.png';

const Footer = () =>{
    return(
        <footer className='footer'>
            <div className='encasing'>
                <div className='left'>    
                    <img src={picapool_logo} alt="Picapool Logo" className="logo-image" /> 
                    <span className="company-name">Picapool</span>
                    <p>Redefining the Art of Saving</p>
                    <a href='#' className='Privacy Policy'>Policy & Conditions</a>
                </div>
                <div className='contact'>
                    <h1>
                        Contact Us!
                    </h1>
                    <div>+91 8917602924</div>
                    <a href='mailto:pranadipan@picapool.com'>pranadipan@picapool.com</a>
                </div>
                <div className='Socials'>
                    <h1>
                        Follow Us!
                    </h1>
                <a href="#" class="fa fa-instagram">
                    <img src={insta} />
                </a>
                <a href="#" class="fa fa-linkedin">
                    <img src={In}/>
                </a>
                <a href="#" class="fa fa-X">
                    <img src={X} />
                </a>
                </div>
            </div>
            <div class="copyrights">
                &copy; © 2024 Picapool, Kandi, Sangareddy, Telangana, India. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer; 