import "../index.css";
import React from "react";

class Advice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      advice: props.advice,
    };
  }
  render() {
    return (
      <div className="card">
        <div
          className="aid"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          <span>#12</span>
        </div>
        <div className="date">{this.state.date}</div>
        <div id="adviceText">{this.state.advice}</div>
        <div className="socialShare">
          <div class="share">
            <a
              href="//twitter.com/intent/tweet?text=${}"
              className="twitter"
              target="_blank"
            >
              <i className="ri-twitter-line"></i>&nbsp;Make a TWEET
            </a>
          </div>
          <div className="share">
            <a
              href="//pinterest.com/pin/create/button/?url=%2F%2Fadviceslip.com%2F&amp;media=%2F%2Fapi.adviceslip.com%2Fadvice%2Fundefined%2Fimg%2Fm&amp;description=${}"
              className="pinterest"
              target="_blank"
            >
              <i className="ri-pinterest-line"></i>&nbsp;PIN THIS
            </a>
          </div>
          <div className="share">
            <a
              href="//pinterest.com/pin/create/button/?url=%2F%2Fadviceslip.com%2F&amp;media=%2F%2Fapi.adviceslip.com%2Fadvice%2Fundefined%2Fimg%2Fm&amp;description=${}"
              className="pinterest"
              target="_blank"
            >
              <i className="ri-facebook-fill"></i>&nbsp;FaceBook Share
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Advice;
