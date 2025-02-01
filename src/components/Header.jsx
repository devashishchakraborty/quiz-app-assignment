import quizLogo from "../assets/logo.svg";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="logo" />
      Quiz Application
    </header>
  );
};

export default Header;
