import "./header.css"
import { FaSearch, FaHeart, FaCartPlus,FaUser } from "react-icons/fa";


function Header() {
    return (
        <div className="container-1">
            <div className="logo">
                <h1 id="td">TD</h1>
                <div className="logo-text">
                    <h3>Diamond</h3>
                    <h3>Jewellers</h3>
                </div>
            </div>
            <div className="text">
                <a href="#">Rings</a>
                <a href="#" >More Jewellery</a>
                <a href="#" className="text1">Gifting</a>
                <a href="#" className="text1">Customise</a>
            </div>
            <div className="search">
                <div className="search-box">
                    <input type="text" placeholder="Search For Products" />
                </div>
                <div className="search-icon">
                    <FaSearch />
                </div>

            </div>
            <div className="whishlist"><FaHeart/></div>
            <div className="profile"><FaUser /></div>
            <div className="cart"><FaCartPlus /></div>

        </div>
    )
}

export default Header;