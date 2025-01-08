import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-first">
                <div className="footer-1">
                    <h2>OUR CATEGORIES</h2>
                    <div className="f-text">
                        <a href="#">Rings</a>
                        <a href="#">Earrings</a>
                        <a href="#">Pendants</a>
                        <a href="#">Necklaces</a>
                        <a href="#">Mangalsutra</a>
                        <a href="#">Bracelets</a>
                        <a href="#">Matching Sets</a>
                        <a href="#">Men's Rings</a>
                        <a href="#">Men's Studs</a>
                    </div>

                </div>
                <div className="footer-1">
                    <h2>IMPORTANT LINKS</h2>
                    <div className="f-text">
                        <a href="#">Return & Refund Policy</a>
                        <a href="#">Shipping Policy</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms and Service</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Franchise</a>

                    </div>

                </div>
                <div className="footer-2" >
                    <h2>Contact</h2>
                    <div className="contact">
                        <p>Kankarbag Patna - 800020</p>
                        <p>+918210665831</p>

                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-second">
                <p>2025 © Copyright. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;