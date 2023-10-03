import './feedbackCard.css';

const FeedbackCard= (props) => {

    const {name,commet} = props; 
    return (
        <div>
           {name}
           {commet}
        </div>
    );
};

export default FeedbackCard;