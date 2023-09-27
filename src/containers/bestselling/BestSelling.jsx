import { ProductCard } from '../../components';
import './bestselling.css';

const BestSelling= (props) => {

    const products = [
    {name:'Regular Fit Long Sleeve Top',image:'',price:38.99,star:5.0},
    {name:'Black Crop Tailored Jacket',image:'',price:62.99,star:4.9},
    {name:'Textured Sunset Shirt',image:'',price:49.99,star:5.0},
    ];

    return (
        <section className='section_padding'>
            <div className='fasion__selling-container'>
                <h1>Best selling</h1>
                <p>Get in on the trend with our curated selection of best-selling styles.</p>
                <div className='fasion__product-card-container'>
                {products.map((p,index) => (
                    <ProductCard key={index} name={p.name} price={p.price} star={p.star} image={p.image}/>
                ))}
                </div>
                <button className='btn btn-secondary'>See all <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                <path d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9L23 9V7L0 7L0 9Z" fill="#224F34"/>
                                </svg>
                </button>
            </div>
        </section>
    );
};
2
export default BestSelling;