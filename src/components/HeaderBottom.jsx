import React, {useState} from "react";
import logo from '../assets/img/logo.png'
import { RxCaretDown } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import DropDownWindow from "./DropDownWindow";
import ServicesDropDown from "./ServicesDropDown";
import { MdClose } from "react-icons/md";
import { RxCaretUp } from "react-icons/rx";


function HeaderBottom() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const toggleDropDownMenu = () => {
        setIsDropDownMenuOpen(!isDropDownMenuOpen)
    }
    return (
       <>
       <nav className="grid" > 
            <a href="" className="logo"><img src={logo} alt="logo" className="logo"/></a>
            
            <div className={`nav ${isOpen && 'active'}`}>
                
                <div onMouseEnter={()=> setHoveredLink("shopTires")}
                    onMouseLeave={()=> setHoveredLink(null)} className={`dropDownContainer ${isOpen && 'active'}`}>
                    <div className="dropDownContainerContent" onClick={toggleDropDownMenu}>
                    <a href="" className="nav_drop_down_link" > 
                        <span>Shop Tires</span>  
                    </a>
                    {isDropDownMenuOpen ?  <RxCaretUp style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}}/> : <RxCaretDown  style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}} />  }
                    
                    </div>
                    {hoveredLink === "shopTires" && <DropDownWindow linkType = {hoveredLink} isActive = {isDropDownMenuOpen} />}
                </div>
               <div onMouseEnter={()=> setHoveredLink("services")}
                    onMouseLeave={()=> setHoveredLink(null)} className={`dropDownContainer ${isOpen && 'active'}`}>
                    <a href="" className="nav_drop_down_link"> 
                        <span>Services</span>  
                        
                    </a>
                    <RxCaretDown  style={{ fontSize: '24px', marginLeft: '2px', strokeWidth: "1"}}/>
                    {hoveredLink === "services" && <ServicesDropDown linkType = {hoveredLink} />}
               </div>
                <a href="">Locations</a>
                <a href="">Tips & Guides</a>
                <a href="">Financing</a>
            </div>
            <div className="barsIcon" onClick={toggleMenu}>
            {isOpen ? <MdClose style={{ fontSize: '26px', }}/> : <FaBars  style={{ fontSize: '26px', }}/>}
       
            </div>
       </nav>
        
       

       <div>

       </div>
       </>
    );
}

export default HeaderBottom;