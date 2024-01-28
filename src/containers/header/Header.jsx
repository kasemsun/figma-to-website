import {mask} from './imports';
import "./header.css";

const Header = () => {
  return (
    <header className="fasion__header section_padding">
        <div className="fasion__header-container">
            <h1 >Discover and  <br />Find Your Own  <br />Fashion!</h1>
            <p >
              Explore our curated collection of stylish <br /> clothing and accessories
              tailored to your <br />unique taste.
            </p>
            <button className="btn btn-primary">Explore Now</button>
        </div>
        <div className="fasion__header-image">
            <img  loading="lazy" src={mask}/>
          </div>
    </header>
  );
};

export default Header;
