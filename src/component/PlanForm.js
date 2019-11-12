import React, {Component} from 'react';
import './css/PlanForm.css';

const TypeButton = ({ value, active, onClick }) => {
  return (
    <input 
      type="button" value={value} 
      className="plan-button" 
      onClick={onClick}
      
    />
  );
}

class PlanForm extends Component {

  state={
    place:'',
    price:'',
    time:'',
    stars:'',
    review:'',
    type: this.props.selected,
    day: this.props.day
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('change'+this.state.time);
  }
  
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    //e.preventDefault();
    
    // 상태 초기화
    this.setState({
      place:'',
      price:'',
      time:'',
      stars:'',
      review:'',  
      type: 'food'
    })  

    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    
  }

  handleImageChange = () => {
    this.setState({
      ...this.state,
      type: this.props.selected
    })
  }


  render(){

    const {
      types,
      selected,
      onSelect,
      day
    } = this.props;

    const {
      place,
      price,
      time,
      stars,
      review
    } = this.state;

    const typeList = types.map(
    (item) => (<TypeButton value={item.value} active={selected === item.key} onClick={()=>onSelect(item.key,day)} key={item.key}/>));

  return (
    <div className="planForm">
      <section className="button-wrapper">
        { typeList }
      </section>
      <section>  
        <div className='form-wrapper'>
          <div className='option-wrapper'>
            <div className="days">
              <span>{day}일차</span>
            </div>
            <div className="option-form">
              <div>
                <span> 장소</span>
                <input type="text" value={place} name="place" placeholder="그 곳은 어딘가요?" onChange={this.handleChange}/>
                
                <span> 가격</span>
                <input type="number" value={price} name="price" placeholder="얼마였나요?" onChange={this.handleChange}/>
              </div>
              <div>
                <span> 시간</span>  
                <input type="time" value={time} name="time" onChange={this.handleChange}/>
                
                <span> 별점</span>
                <input type="number" value={stars} name="stars" placeholder="5점 만점에?" onChange={this.handleChange}/>
              </div>
            </div>
          </div>
          <div className='form-img'>
            <img src={require('./img/'+selected+'.png')} alt={selected} onLoad={this.handleImageChange}/>
          </div>
          <div className="review-wrapper">
            <textarea name="review" value={review} placeholder="그 곳은 어땠나요? 만족스러웠나요? 자세한 평을 써주세요!" onChange={this.handleChange}/>
          </div>
        </div>
      </section>
      <input type="button" value="확인" className="plan-button" onClick={this.handleSubmit}/>
    </div>
  );
}
}

export default PlanForm;