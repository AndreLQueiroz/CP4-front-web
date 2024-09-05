import {Link, NavLink} from 'react-router-dom'

import React, {useState} from 'react';
import { NavStyle } from '../css/NavStyle';


const Nav=()=>{
    const [menuOpen, setMenuOpen] = useState(false)
    
    
    
    return(

        <NavStyle>
    <nav>
        <li><Link to='/' className='title'>
        Home</Link></li>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
        <span></span>
        <span></span>
        <span></span>

        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to='/Produtos' className="produtos">Produtos</NavLink></li>
        <li><NavLink to='Contato'>Contato</NavLink></li>
        <li><NavLink to='/Sobre'>Sobre</NavLink></li>
       </ul>
    </nav>
        </NavStyle>
    

    );
}
export default Nav