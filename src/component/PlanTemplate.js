import React from 'react';
import './css/PlanTemplate.css';

const PlanTemplate = ({form, children}) => {
  return (
    <main className="plan-list-template">
      <div className="title">
        <h1> 여행 계획 세우기</h1>
        <p>
          여행 계획을 쉽고 간단하게! <br/>
          식사, 숙소, 명소 버튼을 눌러 여행 계획을 세우세요!
        </p>
      </div>
      <section>
        { form } 
      </section>
      <section>
        { children }
      </section>
    </main>
  );
}

export default PlanTemplate;