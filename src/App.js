import React, { Component } from 'react';
import PlanTemplate from './component/PlanTemplate';
import PlanForm from './component/PlanForm';

const types= [
  {key:'food', value:'음식점'},
  {key:'place', value:'명소'},
  {key:'stay', value:'숙소'},
  {key:'next day', value:'다음날'}];

class App extends Component {
  state = {
    type:'food'
  }

  handleTypeChange = (type) => {
    this.setState({ type })
  }

  render(){

    const { type
     } = this.state;

    const {
      handleTypeChange
    } = this;

    console.log('test test test');
    return(
      <PlanTemplate>
        <PlanForm
          types={types} selected = {type} onSelect={handleTypeChange}/>
      </PlanTemplate>
    );
  }
}

export default App;