const Navbar = (props) => {
    return (
        <div className="navbar">
            <ul>
                <li>Logo</li>
                <li>
                    <button onClick={() => props.handleMode()}>{props.darkMode ? "Light" : "Dark"}</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
