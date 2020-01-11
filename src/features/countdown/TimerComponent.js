import React from "react";
import moment from "moment";
import "./TimerComponent.css";

class TimerComponent extends React.Component {
  state = {
    months: "X",
    days: "X",
    hours: "X",
    minutes: "X",
    seconds: "X"
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const deadline = moment(this.props.deadline, this.props.timeFormat);
      const now = moment();

      const duration = moment.duration(deadline.diff(now));

      const months = duration.months();
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      this.setState({ months, days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { months, days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <div className='countdown-wrapper'>
          {months !== 0 && (
            <div className='countdown-item'>
              {months}
              {months < 2 ? <span> month</span> : <span> months</span>}
            </div>
          )}
          {(months !== 0 || days !== 0) && (
            <div className='countdown-item'>
              {days}
              {days < 2 ? <span> day</span> : <span> days</span>}
            </div>
          )}
          {(months !== 0 || days !== 0 || hours !== 0) && (
            <div className='countdown-item'>
              {hours}
              {hours < 2 ? <span> hour</span> : <span> hours</span>}
            </div>
          )}
          {(months !== 0 || days !== 0 || hours !== 0 || minutes !== 0) && (
            <div className='countdown-item'>
              {minutes}
              {minutes < 2 ? <span> minute</span> : <span> minutes</span>}
            </div>
          )}
          {
            <div className='countdown-item'>
              {seconds}
              {seconds < 2 ? <span> second</span> : <span> seconds</span>}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default TimerComponent;
