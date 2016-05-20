import React, {Component} from 'react';

export default class ResolutionSingle extends Component {
	toggleChecked() {
		Meteor.call('toggleResolution', this.props.resolution._id, this.props.resolution.complete);
	}
	render() {
		return (
			<li>
				<input type="checkbox"
					readOnly={true}
					checked={this.props.resolution.complete}
					onClick={this.toggleChecked.bind(this)} />
				{this.props.resolution.text}
				{this.props.resolution.complete.toString()}
			</li>
		)
	}
}
