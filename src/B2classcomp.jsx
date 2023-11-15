import { Component } from "react";
import icon from "/house.svg";

class B2classcomp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div
          style={{
            border: "0.5px solid rgba(25, 188, 228, 0.20)",
            background: "#FFF",
            maxWidth: "541px",
            width: "100%",
            display: "flex",
            gap: "28px",
            padding: "24px",
            marginBottom: "16px",
          }}
        >
          <div>
            <img src={this.props.icon} />
          </div>
          <div>
            <h4>{this.props.title}</h4>
            <p style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor
              pulvinar at augue vestibulum euismod risus{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default B2classcomp;
