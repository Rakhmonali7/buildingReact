import "./App.css";
import Header from "./Header";
import BodyOne from "./Body1";
import Body2 from "./Body2";
function App() {
  return (
    <div>
      <div className="navigationPanel">
        <span className="logo">
          <img src="/pic/logo.svg" alt="logo" />
          Building
        </span>
        <nav>
          <ul className="ul">
            <li>Home</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Properties</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="btnLogo">Log in</button>
      </div>
      <Header />
      <BodyOne />
      <Body2 />
    </div>
  );
}

export default App;
