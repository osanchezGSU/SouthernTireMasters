import React from "react";
import '../assets/css/Footer.css'
import logo from '../assets/img/logo.png'
import {Link} from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdCopyright } from "react-icons/md";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <footer>
            <div className="top">
                <div className="footer-links">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div className="footer-nav">
                        <Link to="/shop-tires"><span>Shop Tires</span></Link>
                        <Link to="/services"><span>Services</span></Link>
                        <Link to="/locations"><span>Locations</span></Link>
                        <Link to="/tips-guides"><span>Tips & Guides</span></Link>
                    <   Link to="/financing"><span>Financing</span></Link>
                    </div>
                </div>
                <div className="hop">
                    <h1>Business Hours</h1>
                    <p>Mon-Fri : 8am to 6pm</p>
                    <p>Sat : 8am to 5pm</p>
                    <p>Sun : Closed</p>
                </div>
            </div>
            <div className="social-media">
                <h1>Stay In Touch</h1>
                <div>
                    <a href="https://www.instagram.com/southerntiremasters/?hl=en" target="_blank"><FaSquareInstagram /></a>
                    <a href="https://www.facebook.com/SouthernTireMasters/" target="_blank"><FaFacebookSquare /></a>
                    <a href="https://www.tiktok.com/@southerntiremasters" target="_blank"><AiFillTikTok /></a>
                </div>
            </div>
            <div className="copyright-container">
                <MdCopyright />
                <p>{year}</p>
            </div>

        </footer>
    );
};

export default Footer;