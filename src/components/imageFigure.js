require('normalize.css/normalize.css');
require('styles/main.scss');
import React from 'react';
/*
 * 获取区间内的一个随机值
 */
/*function getRangeRandom(low, high) {
  return Math.ceil(Math.random() * (high - low) + low);
}

/!*
 * 获取 0~30° 之间的一个任意正负值
 *!/
function get30DegRandom() {
  return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
}*/

class imageFigure extends React.Component {
  render() {
    return (
      <figure>
        <img src={this.props.data.imageURL}
             alt={this.props.data.title}
        />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}
export default imageFigure;
