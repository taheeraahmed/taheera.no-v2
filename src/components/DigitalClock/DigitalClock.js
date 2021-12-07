import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateClass: new Date(),
    };

    this.time = this.state.dateClass.toLocaleTimeString();
    this.date = this.state.dateClass.toDateString();
    this.hourMin =
      this.time.length === 10 ? this.time.slice(0) : this.time.slice(0, 5);
  }

  setTime = () => {
    this.setState({
      dateClass: new Date(),
    });
    this.date = this.state.dateClass.toDateString();
    this.time = this.state.dateClass.toLocaleTimeString();
    this.hourMin =
      this.time.length === 10 ? this.time.slice(0) : this.time.slice(0, 5);
  };

  componentDidMount() {
    setInterval(this.setTime, 1000);
  }

  render() {
    return (
        <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: 120}}>{this.hourMin}</h1>
        <h2>{this.date}</h2>
        </div>
        );
  }
}
