import { useRef } from 'react';

const ContactUs = () => {

    // clear inputs upon submission
    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        e.target.reset();
        alert('Thank you for your form submission! We will get in contact shortly.');
    }

    return (
        <main>
            <section className="contactUsForm wrapper">
                <h2>Contact Us</h2>
                <form onSubmit={handleClick} action="#" method="#" className="contactForm" name="contactForm" id="contactForm">

                    <div className="nameFlexContainer">
                        <label htmlFor="firstName" className="srOnly">First Name:</label>
                        <input ref={firstRef} type="text" id="firstName" name="firstName" placeholder="first name" className="firstName" required />

                        <label htmlFor="lastName" className="srOnly">Last Name:</label>
                        <input ref={lastRef} type="text" id="lastName" name="lastName" placeholder="last name" className="lastName" required />
                    </div>

                    <label htmlFor="email" className="srOnly">Email:</label>
                    <input ref={emailRef} type="email" id="email" name="email" placeholder="email" required />

                    <label htmlFor="message" className="srOnly">Message:</label>
                    <textarea ref={messageRef} name="message" id="message" cols="30" rows="10" placeholder="message" required />
                    <div className="btnContainer">
                        <button className="submitBtn" value="submit">submit</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default ContactUs;