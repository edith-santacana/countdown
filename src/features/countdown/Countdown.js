import React from "react";
import MilestoneList from "./MilestoneList";
import config from "../../config";
import { load } from "../../helpers/spreadsheet";

class Countdown extends React.Component {
  state = {
    milestones: [],
    error: null
    // isOpen: false
  };

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
    this.interval = setInterval(
      () => window.gapi.load("client", this.initClient),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      this.setState({
        milestones: data.milestones
      });
    } else {
      this.setState({
        error: "error"
      });
    }
  };

  render() {
    const { milestones, error } = this.state;
    if (error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        <MilestoneList milestones={milestones} />
      </div>
    );
  }
}

export default Countdown;
