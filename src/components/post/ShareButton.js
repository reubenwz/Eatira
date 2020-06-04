import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";
import { TwitterButton, FacebookShareButton } from "react-social-buttons";

export class ShareButton extends Component {
  isBrowser() {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

  render() {
    let url = "";
    if (this.isBrowser()) {
      url = window.location.href;
    }

    return (
      <div id="buttons">
        <FacebookShareButton url={url} />
        <TwitterButton url={url} text={"this page is cool"} />
      </div>
    );
  }
}

ReactDOM.render(<ShareButton />, document.getElementById("root"));
