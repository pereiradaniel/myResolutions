import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {
	
	resolutions() {
		return Resolutions.find().fetch();
	}
	render() {
		return(
			<div>
				<h1>My Resolutions</h1>
				<ResolutionsForm />
				<ul>
				{this.resolutions().map( (resolution)=>{
					return <ResolutionSingle resolution={resolution} />
				})}
				</ul>
			</div>
		)
	}
}