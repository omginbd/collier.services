import { map } from 'lodash'
import React from 'react'

import style from './style'

export default class ShowoffCarousel extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedTabIndex: 0
    }
  }

  render () {
    const { selectedTabIndex } = this.state
    const sides = [
      <div className={style.middle}>side two</div>,
      <div className={style.left}>side one</div>,
      <div className={style.right}>side three</div>
    ]
    return (
      <div className={style.carouselWrapper}>
        {map(sides, (Side, i) => (
          <div
            className={[
              style.side,
              selectedTabIndex === i ? style.active : ''
            ].join(' ')}
          >
            {Side}
          </div>
        ))}
      </div>
    )
  }
}
