import React, { Component } from "react";
export default class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
  }
  componentDidMount() {
    this.tick();
  }
  tick = () => {
    const d = new Date();
    const newHours = d.getHours();
    const newmin = d.getMinutes();
    const newsec = d.getSeconds();
    const newtime = `${newHours}:${newmin}:${newsec}`;
    this.setState({ time: newtime });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.time !== prevState.time) {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}
