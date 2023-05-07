import React from 'react'
import Div from '../Div'

export default function TextWidget({logo,logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      {/* <img src={logoSrc} alt={logoAlt} /> */}
      {logo}
      <p>{text}</p>
    </Div>
  )
}
