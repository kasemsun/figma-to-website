import ShopingIcon from '../shopingIcon/ShopingIcon';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import React, {useState} from 'react';

const Navbar= (props) => {
const [toggleMenu,SetToggleMenu]= useState(false);

    return (
            <nav className='fasion__navbar'>
                <div className='fasion__navbar-link'>
                    <div className='fasion__navbar-logo'>Rivo</div>
                    <div className='fasion__navbar-links_container'>
                    <p><a href='#home'>HOME</a></p>
                    <p><a href="#shop">SHOP</a></p>
                    <p><a href="#feature">FEATURES</a></p>
                    <p><a href="#contact">CONTACT</a></p>
                    </div>
                </div>
                <div className='fasion__navbar-login'>
                    <ShopingIcon/>
                    <button className='btn btn-secondary'>LOGIN</button>
                </div>
                <div className='fasion__navbar-menu'>
                    {toggleMenu
                    ?<RiCloseLine color="#224F34" size={27} onClick={()=>SetToggleMenu(false)}/>
                    :<RiMenu3Line color="#224F34" size={27} onClick={()=>SetToggleMenu(true)}/>
                    }
                    {toggleMenu &&(
                       <div className="fasion__navbar-menu_container scale-up-center">
                       <div className="fasion__navbar-menu_container-links">
                        <p><a href='#home'>HOME</a></p>
                        <p><a href="#shop">SHOP</a></p>
                        <p><a href="#feature">FEATURES</a></p>
                        <p><a href="#contact">CONTACT</a></p>
                       </div>
                       <div className="fasion__navbar-menu_container-links-login">
                            <ShopingIcon/>
                            <button className='btn btn-secondary'>LOGIN</button>
                       </div>
                    </div>
                    )

                    }
                </div>
            </nav>
    );
};

export default Navbar;