import React, {Component} from 'react';
import boy from '../src/images/boy.png';

class SectionOne extends Component {
  render() {
    return (
      <div id="upper_Block">
        <div className="upper_Block_left">
          <img src={boy} className="boy_image" alt="boy"/>
          <span className="upper_image">
            <div className="upper_image_top">CURT</div> 
            <div className="upper_image_bottom">SHEARD</div>
          </span>
        </div>
        <div className="upper_Block_right">
          <span className="upper_head">Meet our brand</span>
          <p className="upper_para">{`Court Sheard, swag iPhone neutra williamsburg,
             sriracha you probably haven't of them PBR&B marfa seitan.
             Four dollar toast wayfarers helvetica etsy, affogato pinterest schlitz.
             Squid yr mlkshk, pinterest pour-over polaroid photo booth.
             Yr fixie plaid kogi.`}</p>
        </div>
      </div>
    )
  }
}

export default SectionOne;