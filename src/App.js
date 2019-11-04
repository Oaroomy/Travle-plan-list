import React, { Component } from 'react';
import PlanTemplate from './component/PlanTemplate';
import PlanForm from './component/PlanForm';
import PlanItemList from './component/PlanItemList.js';

const types= [
  {key:'food', value:'음식점'},
  {key:'place', value:'명소'},
  {key:'stay', value:'숙소'},
  {key:'next day', value:'다음날'}];

class App extends Component {

  state = {
    type:'food',
  }

  state = {
    type:'food',
    plans: [
      {id: 0, place:'고급 레스토랑', price:30000, time:'20:00:00',stars:5,review:'최고였습니다!'}
    ]
  }


  handleTypeChange = (type) => {
    this.setState({ type })
  }

  render(){

    const { type, plans } = this.state;

    const {
      handleTypeChange
    } = this;

    return(
      <PlanTemplate
       form={(
        <PlanForm
          types={types} 
          selected = {type} 
          onSelect={handleTypeChange}
        />
        )}
      >
        <PlanItemList plans={plans} type={type} />
      </PlanTemplate>
    );
  }
}

export default App;