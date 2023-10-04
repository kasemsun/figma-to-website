import './feedbackCard.css';

const FeedbackCard= (props) => {

    const {name,comment} = props; 
    return (
        <div className='fasion__feedbace-card'>
            <h1 className='fasion__feedbace-card-logo'>"</h1>
            <div>{name}</div>
            <p>{comment}</p>
        </div>
    );
};

export default FeedbackCard;