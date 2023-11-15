import "./body2.css";
import icon from "/building.png";
import icon2 from "/house.svg";
import icon3 from "/appartment.svg";
import icon4 from "/studio.svg";
import icon5 from "/villa.svg";

import img from "/mainb3.png";
import img2 from "/subindia.png";
import img3 from "/subjapan.png";
import img4 from "/sublondon.png";
import img5 from "/submalasia.png";
import B2classcomp from "./b2classcomp";
import Place from "./funcb3comp";
function Body2() {
  return (
    <div>
      <div className="b2cont">
        <h1>What are you looking for?</h1>
        <div className="b2left">
          <img src={icon} />
        </div>
        <div className="b2right">
          <B2classcomp icon={icon2} title="Family House" />
          <B2classcomp icon={icon3} title="Apartment" />
          <B2classcomp icon={icon4} title="Studio & Offices" />
          <B2classcomp icon={icon5} title="Villa & Condo" />
        </div>
      </div>

      {/* Body3 */}
      <div>
        <h2 style={{ textAlign: "center" }}>Most Popular Places</h2>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="b3cont">
          <div>
            <Place img={img} />{" "}
          </div>
          <Place img={img2} />
          <Place img={img3} />
          <Place img={img4} />
          <Place img={img5} />
        </div>
      </div>

      {/* end of b3 */}
    </div>
  );
}
export default Body2;
