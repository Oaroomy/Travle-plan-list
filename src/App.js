import React, { Component } from 'react';
import PlanTemplate from './component/PlanTemplate';
import PlanForm from './component/PlanForm';
import PlanItemList from './component/PlanItemList.js';

const types= [
  {key:'food', value:'음식점'},
  {key:'place', value:'명소'},
  {key:'stay', value:'숙소'},
  {key:'nextday', value:'다음날'}
];

class App extends Component {

  id = 1;
  day = 1;
  state = {
    selected:'food',
    plans: [
      {id: 0, place:'서울특별시의 고급 레스토랑', price:300000, time:'20:00:00',stars:5, review:'이곳에서는 꼭 파스타를 드셔보세요. 파스타가 정말 맛있습니다.', type: 'food', day:1}
    ],
    day:1
  }

  handleTypeChange = (selected, day) => {

    if (selected !== 'nextday') {
      this.setState({
        ...this.state,
        selected: selected
      });
    } else {
      this.setState({
        ...this.state,
        day: ++day
      });
    }
   
  }


  handleCreate = (data) => {
    const { plans } = this.state;
    this.setState({
      selected:'food',
      plans: plans.concat({ id: this.id++, ...data, day:this.state.day })
    })
    console.log(plans+"추가사항");
  }

  render(){

    const { selected, plans, day } = this.state;

    const {
      handleTypeChange,
      handleCreate
    } = this;

    return(
      <PlanTemplate
       form={(
        <PlanForm
          types={types} 
          selected = {selected} 
          onSelect={handleTypeChange}
          onCreate={handleCreate}
          day={day}
        />
        )}
      >
        <PlanItemList plans={plans}/>
      </PlanTemplate>
    );
  }
}

export default App;