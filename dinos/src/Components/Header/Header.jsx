import { Link } from "react-router-dom";
import { Headermenu, Logo, MenuButtons } from "./styles";

const Header = () => {
    return (
        <>
        <Headermenu>
            {/* Logo is hugging top due to in ./Styles it is a div* not p* like MenuButtons */}
            <div> 
                <Logo>Dinoslogo</Logo>
            </div>
            <div className="horizontal-list">
                <MenuButtons>opt1</MenuButtons>
                <MenuButtons>opt2</MenuButtons>
                <MenuButtons>opt3</MenuButtons>
            </div>
        </Headermenu>

            <Link to="/">
                <p>Header Link - Home</p>
            </Link>

            <Link to="/Dogs">
                <p>Header Link - Dogs</p>
            </Link>

            {/* <Link to="/NotFound">
                <p>Nothingness</p>
            </Link> */}
        </>
    )
};

export default Header;