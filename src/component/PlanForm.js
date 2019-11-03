import React from 'react';
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

const TypeImage = ({ value }) => {
  return (
    <img src={require('./img/'+value+'.png')} alt={value} />
  );
}

const PlanForm = ({types, selected, onSelect}) => {
  
  const typeList = types.map(
    (item) => (<TypeButton value={item.value} active={selected === item.key} onClick={()=>onSelect(item.key)} key={item.key}/>));

  return (
    <div className="planForm">
      <section className="button-wrapper">
        { typeList }
      </section>
      <section className='form-wrapper'>  
        <div>
          <div className='form-img'>
            <TypeImage value={selected} />
          </div>
          <div className='option-wrapper'>
            <span>장소명</span>
            <input type="text"/>
            
            <span> 시간</span>
            <input type="text"/>
            
            <span> 별점 </span>
            <input type="text"/>
          </div>
          <div className="review-wrapper">
            <input type="text" placeholder="그 곳은 어땠나요? 만족스러웠나요?"/>
          </div>
        </div>
      </section>
      <input type="button" value="확인" className="plan-button"/>
    </div>
  );
}

export default PlanForm;