import React, { Component } from "react";
import "./iconHolder.css";

export default class IconHolder extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="iconHolder">
          <h3>{this.props.title}</h3>
          <br/>
          {this.props.children}
        </div>
      </a>
    );
  }
}
