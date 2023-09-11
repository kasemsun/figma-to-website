import ShopingIcon from '../shopingIcon/ShopingIcon';
import './navbar.css';

const Navbar= (props) => {
    return (
            <nav className='navbar'>
                <p className='logo'>Rivo</p>
                <ul className='navbar-link'>
                    <li><a>HOME</a></li>
                    <li><a>SHOP</a></li>
                    <li><a>FEATURES</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
                <div className='right-bar'>
                    <ShopingIcon/>
                    <button className='btn btn-secondary'>LOGIN</button>
                </div>
                
            </nav>
    );
};

export default Navbar;