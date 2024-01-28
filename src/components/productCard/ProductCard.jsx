import './productCard.css';

const ProductCard= (props) => {
    const {name,price,star,image,width,isDesign=false,detail}= props;

    function dollarFormat(price){
        price = '$' + price;
        return price;
    }

    return (
        <div className='fasion__product-card'>
            <img width={width} src={image} alt=""  loading="lazy"/>
            <h4>{name}</h4>
            {isDesign?
            <div className='fasion__product-card-detail'>
              {detail}
            </div>
            :
            <div> 
            {dollarFormat(price)}
            &nbsp;
            |
            &nbsp;
            {star}
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clipPath="url(#clip0_1_127)">
<path d="M19.4672 23.3152L12.0002 17.8272L4.53322 23.3152L7.40022 14.4522L-0.0627823 8.99922H9.15122L12.0002 0.121216L14.8492 8.99922H24.0622L16.6002 14.4522L19.4672 23.3152Z" fill="#F5D426"/>
</g>
<defs>
<clipPath id="clip0_1_127">
  <rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
            </svg>
            </div>
            }
           
        </div>
    );
};

export default ProductCard;