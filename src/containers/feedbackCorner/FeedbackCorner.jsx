import './feedbackCorner.css';
import {FeedbackCard} from '../../components';

const FeedbackCorner= (props) => {

    const feedbacks = [{name:'Emily Wilson',comment:"The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"},
    {name:'Sarah Thompson',comment:"I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"},
    {name:'Olivia Martinez',comment:"I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"},
    ];

    return (
        <section className='fasion__feedback-container section_padding'>
            <h3>Feedback Corner</h3>
            <div className='fasion__feedbac-card-container'>
            {feedbacks.map((f,index) => (
                <FeedbackCard key = {index} name={f.name} comment={f.comment}/>
            ))}
            </div>
            
        </section>
    );
};

export default FeedbackCorner;