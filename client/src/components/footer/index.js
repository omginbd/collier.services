import React from 'react'
import ReactDOM from 'react-dom'

import style from './style'

export default class Footer extends React.Component {
  render () {
    return ReactDOM.createPortal(
      <div className={style.footer}>
        <div>© 2018 Michael Patrick Collier</div>
      </div>,
      document.querySelector('footer')
    )
  }
}
