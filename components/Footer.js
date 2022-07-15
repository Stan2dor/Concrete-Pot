import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => (
  <div className='footer'>
    <h6 style={{ color: "#cdcdcd" }}> im h6 footer</h6>
    <div className='social-icons'>
      <FaFacebookF size={30} /> <FaFacebookMessenger size={30} />{" "}
      <FaInstagram size={30} /> <FaTiktok size={30} />{" "}
    </div>
  </div>
);

export default Footer;
