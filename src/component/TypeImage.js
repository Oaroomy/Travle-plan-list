import React from 'react';

const TypeImage = ({ value }) => {
  return (
    <img src={require('./img/'+value+'.png')} alt={value} />
  );
}

export default TypeImage;