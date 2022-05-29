import React, { useState, useRef, useEffect } from 'react'
import logo from './test.png'
import {GiHamburgerMenu} from 'react-icons/gi';


const Navbar = ({links, social}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    
    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(mobileMenuOpen){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }else{
            linksContainerRef.current.style.height = '0px';
        }
    },[mobileMenuOpen]);
    
    return (
    <nav>
        <div className='nav-header'>
            <img className='logo' src={logo} alt='nav'/>
            <button className='nav-toggle' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}> <GiHamburgerMenu/> </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
            {links.map((link)=><li key={link.id}><a href={link.url}>{link.text}</a></li>)}
            </ul>
        </div>
        <ul className='social'>
            {social.map((social)=><li key={social.id}><a href={social.url}>{social.icon}</a></li>)}
        </ul>
    </nav>
    )
}

export default Navbar