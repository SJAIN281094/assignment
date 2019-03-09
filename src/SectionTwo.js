import React, {Component} from 'react';
import boy from '../src/images/boy.png';

class SectionTwo extends Component {
	render() {
		return (
			<div id="lower_Block">
				<div className="lower_Block_left">
					<img src={boy} className="boy_image" alt="boy"/>
				</div>
				<div className="lower_Block_left">

				</div>		
			</div>
		)
	}
}

export default SectionTwo;