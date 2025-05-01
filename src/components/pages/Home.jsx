import React from "react";
import { IoStarSharp } from "react-icons/io5";
import SectionTitle from "../SectionTitle";


function Home () {
    return(       
        <>
            <section>
                <div className="flex column">
                    <div className="flex">
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <IoStarSharp className="starIcon" />
                        <p className="secondary">Our customers give us 4 stars and up!</p>
                    </div>
                    <h1 className="medium-weight">Expert <h1 className="bold-weight accent">tire, alignment,</h1> and <h1 className="bold-weight accent">brake services</h1> all in <h1>one place.</h1></h1>
                    <p className="secondary">We offer comprehensive services to ensure your vehicle stays safe, reliable, and ready for the road</p>
                </div>
                
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