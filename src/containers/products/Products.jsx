import './products.css';
import ProductCard from '../../components/productCard/ProductCard';
import TabProduct from '../../components/tabProduct/TabProduct';
import { spread_collar_shirt,white_solid_formal_shirt,shine_on_me_blouse,gray_solid_padded_jacket,printed_loose_t_shirt,
    summer_wind_crop_shirt,tailored_jacket,solid_round_neck_shirt} from './imports'


const products = [
    {name:'Spread Collar Shirt',image:spread_collar_shirt,price:48.99,star:5.0},
    {name:'White Solid Formal Shirt',image:white_solid_formal_shirt,price:39.00,star:4.9},
    {name:'Shine On Me Blouse',image:shine_on_me_blouse,price:42.99,star:4.8},
    {name:'Gray Solid Padded Jacket',image:gray_solid_padded_jacket,price:32.99,star:4.7},
    {name:'Printed Loose T-shirt',image:printed_loose_t_shirt,price:39.99,star:5.0},
    {name:'Summer Wind Crop Shirt',image:summer_wind_crop_shirt,price:39.95,star:4.7},
    {name:'Tailored Jacket',image:tailored_jacket,price:46.00,star:4.9},
    {name:'Solid Round Neck T-shirt',image:solid_round_neck_shirt,price:36.00,star:5.0}
    ];

const Product= (props) => {
    return (
        <section className='section_padding'>
            <div className='fasion__product-container'>
                <h2>Our products</h2>
                <TabProduct/>
                <section className='fasion__product-card-container'>
                {products.map((p,index) => (
                    <ProductCard key={index} width={300} name={p.name} price={p.price} star={p.star} image={p.image} />
                ))}
                </section>
            </div>
        </section>
    );
};

export default Product;