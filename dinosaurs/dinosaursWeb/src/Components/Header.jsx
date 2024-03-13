import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to="/">
                <p>Home?</p>
            </Link>

            <Link to="/Dogs">
                <p>Dogs!</p>
            </Link>

            {/* <Link to="/NotFound">
                <p>Nothingness</p>
            </Link> */}
        </>
    )
};

export default Header;