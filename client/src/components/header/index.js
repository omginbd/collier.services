import React from 'react'

import style from './style'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <div className={style.colorFlair} />
        <div className={style.title}>Michael Collier</div>
      </div>
    )
  }
}
