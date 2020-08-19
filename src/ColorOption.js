import React from 'react';

const ColorOption = ({ color, changeColor }) => {
  return (
    <div
      onClick={() => changeColor(color)}
      className='option'
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
};

export default ColorOption;
