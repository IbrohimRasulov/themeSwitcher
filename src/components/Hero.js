import Navbar from "./Navbar";

const Hero = (props) => {
    return (
        <div className="hero-page">
            <Navbar
                handleMode={props.handleMode}
                darkMode={props.darkMode}
            />
            <h1>Hero Page</h1>
        </div>
    );
};

export default Hero;
