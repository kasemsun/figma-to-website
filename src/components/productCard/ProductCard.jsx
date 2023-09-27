import './productCard.css';

const ProductCard= (props) => {
    console.log(props);
    const {name,price,star,image}= props;

    return (
        <div className='fasion__product-card'>
            <img src={image} alt="" />
            <p>{name}</p>
            <div> 
                {price}
                |
                {star}
            </div>
        </div>
    );
};

export default ProductCard;