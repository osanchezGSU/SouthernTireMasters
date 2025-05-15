import React, {useState, useEffect} from "react";
import { IoStarSharp } from "react-icons/io5";
import SectionTitle from "../SectionTitle";
import heroimage from "../../assets/img/heroimage.png"
import {Link} from 'react-router-dom';
import HelmetComponent from '../HelmetComponent'
import Select from 'react-select';
import SBLicensePlate from "../SBLicensePlate";
import SBTireSize from "../SBTireSize";
import ClosestLocationComponent from "../ClosestLocationComponent";
import LocationComponent from "../LocationComponent";
import { LoadScript } from '@react-google-maps/api';
import BenefitsCardContainer from "../BenfitsCardContainer";
import ServiceToggleComponent from "../ServiceToggleComponent";
import useResponsive from "../hooks/useResponsive";

function Home () {
    //  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
     const isMobile = useResponsive();


    const [selectedSearchBy, setSelectedSearchBy] = useState(null);
   
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);


      useEffect(() => {
        if (!navigator.geolocation) {
          setError('Geolocation is not supported by your browser');
          return;
        }
    
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (err) => {
            setError(`Error: ${err.message}`);
          }
        );
      }, []);

      
      const searchByOptions = [
        { value: 'tireSize', label: 'Tire Size' },
        { value: 'licensePlate', label: 'License Plate' }
      ]




    return(       
        <>
            <HelmetComponent title="Home" description="Southern Tire Masters Home Page" />
            <section className="landing-hero first-section">
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
            <section className="tire-select" >
                <div className="tire-select-container">
                    <SectionTitle name = "Tire Select"></SectionTitle>
                    <h2 className="accent">The Best Tire For Your Needs</h2>
                    <Select options={searchByOptions} isSearchable={false} placeholder="Search By" onChange={(option) => setSelectedSearchBy(option.value)}/>
                    {!selectedSearchBy
                        ? null
                        : selectedSearchBy === 'tireSize'
                        ? <SBTireSize />
                        : <SBLicensePlate />}

                </div>
            </section>
            <section className="services">
                <SectionTitle name = "Expert Tire & Auto Services"></SectionTitle>
                <ServiceToggleComponent isMobile={isMobile}/>

            </section>
            <section className="location-section">
                <LoadScript googleMapsApiKey="AIzaSyCF_5qaMWKf4LyZfYA14lLxy_vG14JIDJE" >
                    {location.lat && location.lng ? (
                    <ClosestLocationComponent userLocation={location} />
                    ) : 
                    (<> <SectionTitle name = "Find a Location Near You"></SectionTitle>
                    <LocationComponent isMobile={isMobile}/></>)}
                 </LoadScript>
            </section>
            {/* <section>
                <SectionTitle name = "Testimonials"></SectionTitle>
            </section> */}
            <section>
                <SectionTitle name = "Our Commitment to You"></SectionTitle>
                <BenefitsCardContainer />
            </section>

        </>
    )
}

export default Home;