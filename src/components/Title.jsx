// import logo from "../assets/img/logo.png";
import logo from "../assets/img/SwiggyLogo.webp";

const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" className="logo" src={logo} alt="logo" />
    </a>
  );
};

export default Title;
