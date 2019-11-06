import React, { Component } from 'react';
import PlanItem from './PlanItem';

class PlanItemList extends Component {
  
  render(){
    const { plans } = this.props;

    const planList = plans.map(
      ({id, place, price, time, stars, review,type}) => (
        <PlanItem
          id={id}
          place={place}
          price={price}
          time={time}
          stars={stars}
          review={review}
          type={type}
          key={id}
        />
      )
    )

    return(
      <div>
        {planList}
      </div>
    );
  };
}

export default PlanItemList;