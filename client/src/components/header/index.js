import React from 'react'
import ReactDOM from 'react-dom'

import style from './style'

export default class Header extends React.Component {
  render () {
    return ReactDOM.createPortal(
      <div>
        <div className={style.colorFlair} />
        <div className={style.title}>Michael Collier</div>
      </div>,
      document.querySelector('header')
    )
  }
}
