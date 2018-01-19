import React from 'react';
import { render } from 'react-dom';
import App from './App'
import './Style.css'

const HomeStyle = props =>(
  <div className="home">{props.children}</div>
)

render(
  <HomeStyle>
  <App/>
  </HomeStyle>,
  document.getElementById('root')
)