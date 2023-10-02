import './clothesForYou.css';
import {black_crop,sunset_shirt,regular_fit} from './imports';
import { ProductCard } from '../../components';

const ClothesForYou= (props) => {

    const products = [
        {name:'Regular Fit Long Sleeve Top',image:regular_fit,price:38.99,star:5.0},
        {name:'Black Crop Tailored Jacket',image:black_crop,price:62.99,star:4.9},
        {name:'Textured Sunset Shirt',image:sunset_shirt,price:49.99,star:5.0},
        ];

    return (
        <section className='fasion__desinger-container section_padding'>
            <h3>Designer Clothes For You</h3>
            <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
            <div className='fasion__product-card-container'>
            {products.map((p,index) => (
                    <ProductCard key={index} width={420} name={p.name} price={p.price} star={p.star} image={p.image}/>
                ))}
            </div>

        </section>
    );
};

export default ClothesForYou;