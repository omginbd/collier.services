import React from 'react'
import ReactDOM from 'react-dom'

import style from './style'

export default class Header extends React.Component {
  render () {
    return ReactDOM.createPortal(
      <div>
        <div className={style.colorFlair}>
          <a href="https://github.com/omginbd">GITHUB</a>
          <a href="https://linkedin.com/in/omginbd">LINKEDIN</a>
        </div>
        <div className={style.title}>Michael Collier</div>
      </div>,
      document.querySelector('header')
    )
  }
}
