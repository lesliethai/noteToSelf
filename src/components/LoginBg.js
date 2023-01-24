import Footer from './Footer';

const LoginBg = () => {
    console.log('LoginBg has rendered.');

    return (
        <>
            <section className="loginBgContainer">
                <div className="wrapper">
                    <h2>a little note app for your daily needs</h2>
                    <img className="loginImg" src={require("../assets/loginPgImg2.png")} alt="An individual surrounded by various objects, such as browsers, documents, and schedules." />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LoginBg;