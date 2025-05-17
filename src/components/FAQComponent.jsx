import React, {useState} from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";


function FAQComponent({question, answer}){
    const [isActive, setIsActive] = useState(false);
     const toggleFAQ = () => {
    setIsActive(prev => !prev);
};
    return(
        <div className="faq-card" onClick={toggleFAQ}>
            <div className="faq-question" >
                <p>
                    {question}
                </p>
                {isActive ? <RxCaretUp /> : <RxCaretDown />}

            </div>
            <div className={`faq-answer ${isActive ? "active" : ""}`}>
                {answer}
            </div>
        </div>
    )
}
export default FAQComponent;