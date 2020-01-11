import React, { Component } from 'react'
import TimerComponent from './TimerComponent';

class MilestoneItem extends Component {
	render() {
		const {milestone} = this.props;

		return (
			<div>
				{/* Project name */}
				<h3 id="MilestoneProject">{milestone.project}</h3>
				<TimerComponent deadline={milestone.time} timeFormat={'YYYY-MM-DD hh:mm:ss a'}/>
				{/* Milestone name + Due date */}
				<h3 id="MilestoneTitleDate">
					<span id="MilestoneInfo">{milestone.title}</span>
					<span id="MilestoneInfo"> - </span>
					<span id="MilestoneInfo">{milestone.time}</span>
				</h3>
				{/* Description */}
				<h3 id="MilestoneDescription">{milestone.description}</h3>
			</div>
		)
	}
}

export default MilestoneItem;
