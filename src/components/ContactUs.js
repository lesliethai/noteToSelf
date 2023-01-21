const ContactUs = () => {
    console.log('ContactUs has rendered.');

    return (
        <section className="contactUsForm wrapper">
            <h2>Contact Us</h2>
            <form action="#" method="POST" className="contactForm" name="contactForm" id="contactForm">

                <div className="nameFlexContainer">
                    <label for="firstName" className="srOnly">Name</label>
                    <input type="text" id="firstName" name="lastName" placeholder="first name" className="firstName" required />

                    <label for="lastName" className="srOnly">Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="last name" className="lastName" required />
                </div>

                <label for="email" className="srOnly">Email</label>
                <input type="email" id="email" name="email" placeholder="email" required />

                <label for="message" className="srOnly">message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="message" required />
                <div className="btnContainer">
                    <button className="submitBtn" value="submit">submit</button>
                </div>
            </form>
        </section>

    )
}

export default ContactUs;