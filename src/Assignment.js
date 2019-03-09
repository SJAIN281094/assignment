import React, {Component} from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import './css/Assignment.css';


class Assignment extends Component {
	render() {
		return (
			<div id="body">
				<SectionOne />
				<SectionTwo />
			</div>
		)
	}
}

export default Assignment;