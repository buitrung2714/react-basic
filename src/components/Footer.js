import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
