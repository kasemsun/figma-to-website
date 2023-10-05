import './feedbackCard.css';
import {feedback_logo} from './imports';

const FeedbackCard= (props) => {

    const {name,comment} = props; 
    return (
        <div className='fasion__feedbace-card'>
            <img className='fasion__feedbace-card-logo' src={feedback_logo} alt="" />
            <div>{name}</div>
            <p>{comment}</p>
        </div>
    );
};

export default FeedbackCard;