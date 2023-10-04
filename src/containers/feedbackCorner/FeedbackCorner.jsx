import { FeedbackCard } from '../../components';
import "./feedbackCorner.css";

export const FeedbackCorner = (props) => {

    const feedbacks = [{ name: 'Emily Wilson', comment: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!" },
    { name: 'Sarah Thompson', comment: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!" },
    { name: 'Olivia Martinez', comment: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!" },
    ];

    return (
        <section className='fasion__feedback-container section_padding'>
            <h3>Feedback Corner</h3>
            <div className='fasion__feedbac-card-container'>
                {feedbacks.map((f, index) => (
                    <FeedbackCard key={index} name={f.name} comment={f.comment} />
                ))}
            </div>
            <div className='fasion__feedback-btn-container'>
                <svg className='fasion__feedback-btn back' xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                        <g filter="url(#filter0_d_1_32)">
                            <rect x="51" y="44" width="40" height="40" rx="3" fill="white" />
                            <path d="M74.071 57L67 64.0711" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                            <path d="M74.071 71.0713L67 64.0002" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_32" x="0" y="0" width="142" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="7" />
                                <feGaussianBlur stdDeviation="25.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_32" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_32" result="shape" />
                            </filter>
                        </defs>
                </svg>
                <svg className='fasion__feedback-btn forward' xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                        <g filter="url(#filter0_d_1_27)">
                            <rect x="51" y="44" width="40" height="40" rx="3" fill="#C2EFD4" />
                            <path d="M67 57L74.0711 64.0711" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                            <path d="M67 71.0713L74.0711 64.0002" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_27" x="0" y="0" width="142" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="7" />
                                <feGaussianBlur stdDeviation="25.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape" />
                            </filter>
                        </defs>
                </svg>
            </div>
        </section>
    );
};

export default FeedbackCorner;