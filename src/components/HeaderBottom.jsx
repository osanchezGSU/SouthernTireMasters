import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { RxCaretDown } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import DropDownWindow from "./DropDownWindow";
import ServicesDropDown from "./ServicesDropDown";
import { MdClose } from "react-icons/md";
import { RxCaretUp } from "react-icons/rx";
import {
  preloadShopTires,
  preloadFinancing,
  preloadLocations,
  preloadServices
} from '../routes'


function HeaderBottom() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false)
    const [isServiceDropDownMenuOpen, setIsServiceDropDownMenuOpen ] = useState(false);
    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(newState);

  // Close dropdowns if menu is being closed
    if (!newState) {
         setIsDropDownMenuOpen(false);
        setIsServiceDropDownMenuOpen(false);
        setHoveredLink(null);
        }
    }
    const toggleDropDownMenu = () => {
        setIsDropDownMenuOpen((prev) => {
          if (!prev) setIsServiceDropDownMenuOpen(false); // close the other menu if opening
          return !prev;
        });
      };
      
      const toggleServiceDropDownMenu = () => {
        setIsServiceDropDownMenuOpen((prev) => {
          if (!prev) setIsDropDownMenuOpen(false); // close the other menu if opening
          return !prev;
        });
      };

      useEffect(() => {
        let lastWidth = window.innerWidth;
      
        function handleResize() {
          const mobileBreakpoint = 1025;
          const currentWidth = window.innerWidth;
      
          // If crossing from mobile to desktop
          if (lastWidth <= mobileBreakpoint && currentWidth > mobileBreakpoint) {
            setIsOpen(false);
            setIsDropDownMenuOpen(false);
            setIsServiceDropDownMenuOpen(false);
            setHoveredLink(null);
          }
      
          lastWidth = currentWidth;
        }
      
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      
    return (
       <>
       <nav className="grid" > 
            <Link to="/" className="logo"><img src={logo} alt="logo" className="logo"/></Link>
            
            <div className={`nav ${isOpen ? 'active' : ''}`}>
                
                <div onMouseEnter={()=> setHoveredLink("shopTires")}
                    onMouseLeave={()=> setHoveredLink(null)} className={`dropDownContainer ${isOpen && 'active'}`}>
                    <div className="dropDownContainerContent" onClick={isOpen ? () => {
                    toggleDropDownMenu();
                    setHoveredLink("shopTires");
                    } : undefined}>
                        <Link to="/shop-tires" className="nav_drop_down_link" onMouseEnter={preloadShopTires}  onTouchStart={preloadShopTires} > 
                            <span>Shop Tires</span>  
                        </Link>
                        {isDropDownMenuOpen ?  <RxCaretUp style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}}/> : <RxCaretDown  style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}} />  }  
                    </div>
                    {hoveredLink === "shopTires" && <DropDownWindow linkType = {hoveredLink} isActive = {isDropDownMenuOpen} />}
                </div>
               <div onMouseEnter={()=> setHoveredLink("services")}
                    onMouseLeave={()=> setHoveredLink(null)} className={`dropDownContainer ${isOpen && 'active'}`}>
                    <div className="dropDownContainerContent" onClick= {isOpen ? () => {toggleServiceDropDownMenu() ; setHoveredLink("services")} : undefined }>
                        <Link to="/services" className="nav_drop_down_link" onMouseEnter={preloadServices}  onTouchStart={preloadServices} > 
                            <span>Services</span>  
                        </Link>
                        {isServiceDropDownMenuOpen ?  <RxCaretUp style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}}/> : <RxCaretDown  style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}} />  }  
                    </div>
                    {hoveredLink === "services" && <ServicesDropDown linkType = {hoveredLink} isActive = {isServiceDropDownMenuOpen}/>}
               </div>
                <Link to="/locations" onMouseEnter={preloadLocations}  onTouchStart={preloadLocations} >Locations</Link>
                {/* <Link to="/tips-guides">Tips & Guides</Link> */}
                <Link to="/financing" onMouseEnter={preloadFinancing}  onTouchStart={preloadFinancing} >Financing</Link>
            </div>
            <div className="barsIcon" onClick={toggleMenu}>
            {isOpen ? <MdClose style={{ fontSize: '26px', }}/> : <FaBars  style={{ fontSize: '26px', }}/>}
       
            </div>
       </nav>
      
       </>
    );
}

export default HeaderBottom;