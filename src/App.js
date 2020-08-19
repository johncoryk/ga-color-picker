import React, { useState } from 'react';

import ColorOption from './ColorOption';
import './styles/style.css';

import colors from './data';

function App() {
  const [color, setColor] = useState({
    color: 'black',
  });

  const changeColor = selectedColor => {
    setColor({
      color: selectedColor,
    });
  };

  return (
    <main className='container'>
      <h1>Color Picker</h1>
      <div
        className='big-square'
        style={{ backgroundColor: `${color.color}` }}
      ></div>
      <div className='options'>
        {colors.map(color => (
          <ColorOption key={color} color={color} changeColor={changeColor} />
        ))}
      </div>
    </main>
  );
}

export default App;
