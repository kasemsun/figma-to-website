import './offer.css';
import {mask} from './imports';
import CountDown from '../../components/countdown/CountDown';

const Offer= (props) => {
    return (
        <section className='section_padding'>
            <div className='fasion__offer-container'>
            <div className="fasion__offer-image">
            <img src={mask}/>
            </div>
            <div className="fasion__offer-title">
            <h3 >Exclusive offer</h3>
            <p >
            Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
            </p>
            <CountDown/>
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
        </section>
    );
};

export default Offer;