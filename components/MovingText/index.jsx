import React from 'react';
import Div from '../Div';

export default function MovingText({ text }) {
  return (
    <Div className="cs-moving_text_wrap cs-bold cs-primary_font">
      <Div className="cs-moving_text_in" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Div className="cs-moving_text">{text}</Div>
      </Div>
    </Div>
  );
}
