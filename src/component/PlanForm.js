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

const PlanForm = ({types, selected, onSelect, onChange}) => {
  
  const typeList = types.map(
    (item) => (<TypeButton value={item.value} active={selected === item.key} onClick={()=>onSelect(item.key)} key={item.key}/>));

  return (
    <div className="planForm">
      <section className="button-wrapper">
        { typeList }
      </section>
      <section>  
        <div className='form-wrapper'>
          <div className='option-wrapper'>
            <div className="days">
              <span>1일차</span>
            </div>
            <div className="option-form">
              <div>
                <span> 장소</span>
                <input type="text" name="place" placeholder="그 곳은 어딘가요?"/>
                
                <span> 가격</span>
                <input type="number" name="price" placeholder="얼마였나요?"/>
              </div>
              <div>
                <span> 시간</span>
                <input type="time" name="time"/>
                
                <span> 별점</span>
                <input type="text" name="stars" placeholder="5점 만점에?"/>
              </div>
            </div>
          </div>
          <div className='form-img'>
            <img src={require('./img/'+selected+'.png')} alt={selected} />
          </div>
          <div className="review-wrapper">
            <input type="text" name="review" placeholder="그 곳은 어땠나요? 만족스러웠나요? 자세한 평을 써주세요!"/>
          </div>
        </div>
      </section>
      <input type="button" value="확인" className="plan-button"/>
    </div>
  );
}

export default PlanForm;