import React, { Component } from 'react';
import './css/PlanItem.css';

class PlanItem extends Component {
  render(){
    const{ place, price, time, stars, review, type } = this.props;
    console.log(place+"의"+type+'type입니다.');
    return(
      <div className='item-wrapper'>
        <div className='first-row'>
          <div className="today">
            <span>1일차</span>
            <div>{time}</div> 
          </div>
          <div className="info-wrapper">
            <div className="info-first-row"> 
              <span>장소</span> <div>{place}</div> 
            </div>
            <div className="info-second-row">
               <span>가격</span> <div>{price}</div>
              <span>별점</span> <div>{stars}</div>
            </div>
          </div>
        </div>
        <div  className="second-row">
          <div className="img-item">
            <img src={require('./img/'+type+'.png')} alt={type} />
          </div>
          <div className="review-box">
            {review}
          </div>
        </div>
      </div>
    );
  };
}

export default PlanItem;