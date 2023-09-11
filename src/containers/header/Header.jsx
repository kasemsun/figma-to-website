import { Navbar } from "../../components";
import {mask} from './imports';
import "./header.css";

const Header = (props) => {
  return (
    <header>
      <section>
        <Navbar />
        <div className="header-container">
          <div className="column">
            <p className="title">Discover and Find Your Own Fashion!</p>

            <p className="sub-title">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>

            <button className="btn btn-primary">Explore Now</button>
          </div>
          <div className="column">
            <img src={mask}/>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
