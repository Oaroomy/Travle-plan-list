import React, { Component } from 'react';
import './css/PlanForm.css';
import TypeImage from './TypeImage';

class PlanItem extends Component {
  render(){
    const{ id, place, price, time, stars, review, type } = this.props;
    return(
      <div>
        <div>
          <div>
            <span>1일차</span>
          </div>
          <div>
            <div>
              <span>장소명</span> {place} 
              <span>가격</span> {price}
            </div>
            <div>
              <span>시간</span> {time} 
              <span>별점</span>{stars}
            </div>
          </div>
        </div>
        <div>
        <img src={require('./img/'+type+'.png')} alt={type} />
        </div>
        <div>
          {review}
        </div>
      </div>
    );
  };
}

export default PlanItem;