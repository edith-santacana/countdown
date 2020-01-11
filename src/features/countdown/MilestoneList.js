import React, { Component } from "react";
import MilestoneItem from "./MilestoneItem";
import { Segment } from "semantic-ui-react";

class MilestoneList extends Component {
  state = {
    milestoneId: -1
  };

  componentDidMount() {
    this.updateState();
    this.interval = setInterval(() => this.updateState(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    if (this.state.milestoneId === -1) {
      this.updateState();
    }
  }

  updateState() {
    const enabledMilestones = this.props.milestones.filter(
      milestone => milestone.enabled
    );

    if (enabledMilestones.length === 0) {
      return;
    }

    let milestoneIndex = Math.floor(Math.random() * enabledMilestones.length);

    if (enabledMilestones.length > 1) {
      while (enabledMilestones[milestoneIndex].id === this.state.milestoneId) {
        milestoneIndex = Math.floor(Math.random() * enabledMilestones.length);
      }
    }

    const milestoneId = enabledMilestones[milestoneIndex].id;

    if (milestoneId !== this.state.milestoneId) {
      this.setState({
        milestoneId: milestoneId
      });
    }
  }

  render() {
    return (
      <Segment basic className='MilestoneFrame' textAlign={"center"}>
        {/* Display all milestones */}

        {/* {

					this.props.milestones.map((milestone) => (
						<MilestoneItem key={milestone.id} milestone={milestone}/>
					))

				} */}

        {/* Display a random milestone */}

        {this.props.milestones
          .filter(milestone => milestone.id === this.state.milestoneId)
          .map(milestone => (
            <MilestoneItem key={milestone.id} milestone={milestone} />
          ))}
      </Segment>
    );
  }
}

export default MilestoneList;
