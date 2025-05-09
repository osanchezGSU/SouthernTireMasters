import React, {useState, useEffect} from "react";
import { IoStarSharp } from "react-icons/io5";
import SectionTitle from "../SectionTitle";
import heroimage from "../../assets/img/heroimage.png"
import { BsWindowDesktop } from "react-icons/bs";
import {Link} from 'react-router-dom';
import HelmetComponent from '../HelmetComponent'


function Home () {
    const responsiveSize = 1024;

    const [isMobile, setIsMobile] = useState(window.innerWidth < responsiveSize);
      
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < responsiveSize);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);




    return(       
        <>
            <HelmetComponent title="Home" description="Southern Tire Masters Home Page" />
            <section className="landing-hero">
                <div className="landing-hero-content flex column">
                    <div className="flex landing-hero-header">
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <p className="secondary">Most-Recommended in Town</p>
                    </div>
                    <h1 className="medium-weight headline">{isMobile ? 
                        ( <>Experts in <span className="bold-weight accent"> tire, alignment,
                        </span> and <span className="bold-weight accent"> brake services.</span></>)                        
                        : 
                        (<>Expert <span className="bold-weight accent">tire, alignment,
                        </span> and <span className="bold-weight accent">brake services</span> all in <span className="bold-weight accent">one place.</span>
                        </>)}
                    </h1>
                    <p className="secondary">{isMobile ? 
                    (`Ensuring your vehicle’s safety.`) 
                    : 
                    (`We offer comprehensive services to ensure your vehicle stays safe, reliable, and ready for the road.`)}
                        </p>
                    <div className="button-container"> 
                    <Link to="/shop-tires" className="primary-button button" > 
                            <span>Shop Tires</span>  
                        </Link>
                        <Link to="/services" className="button secondary-button"> 
                            <span>View All Services</span>  
                        </Link>
                    </div>
                </div>
                <img src={heroimage} alt="" />

                
            </section>
            <section>
                <SectionTitle name = "Tire Select"></SectionTitle>
            </section>
            <section>
                <SectionTitle name = "Our Services"></SectionTitle>
            </section>
            <section>
                <SectionTitle name = "Locations"></SectionTitle>
            </section>
            <section>
                <SectionTitle name = "Testimonials"></SectionTitle>
            </section>
            <section>
                <SectionTitle name = "The Value We Provide"></SectionTitle>
            </section>

        </>
    )
}

export default Home;