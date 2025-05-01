import React, {useState, useEffect} from "react";
import { IoStarSharp } from "react-icons/io5";
import SectionTitle from "../SectionTitle";
import heroimage from "../../assets/img/heroimage.png"
import { BsWindowDesktop } from "react-icons/bs";


function Home () {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
      
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);




    return(       
        <>
            <section className="landing-hero flex">
                <div className="flex column landing-hero-content">
                    <div className="flex landing-hero-header">
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <p className="secondary">Most-Recommended in Town</p>
                    </div>
                    <h1 className="medium-weight headline">{isMobile ? 
                        (<h1 className="medium-weight ">Experts in <span className="bold-weight accent"> tire, alignment,
                        </span> and <span className="bold-weight accent">brake services</span>.</h1>)                        
                        : 
                        (<h1 className="medium-weight ">Expert <span className="bold-weight accent">tire, alignment,
                        </span> and <span className="bold-weight accent">brake services</span> all in <span className="bold-weight accent">one place.</span></h1>
                        )}
                    </h1>
                    <p className="secondary">We offer comprehensive services to ensure your vehicle stays safe, reliable, and ready for the road</p>
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