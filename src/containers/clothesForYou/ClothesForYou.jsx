import './clothesForYou.css';
import {accessoires,dresses,outerwear} from './imports';
import { ProductCard } from '../../components';

const ClothesForYou= (props) => {

    const products = [
        {name:'Accessories',image:accessoires,detail:"Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats."},
        {name:'Dresses',image:dresses,detail:"Explore a stunning range of designer dresses, including evening gowns and chic day dresses."},
        {name:'Outerwear',image:outerwear,detail:"Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons."},
        ];

    return (
        <section className='fasion__desinger-container section_padding'>
            <h3>Designer Clothes For You</h3>
            <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
            <div className='fasion__product-card-container'>
            {products.map((p,index) => (
                    <ProductCard key={index} width={420} name={p.name} image={p.image} detail={p.detail} isDesign={true}/>
                ))}
            </div>

        </section>
    );
};

export default ClothesForYou;