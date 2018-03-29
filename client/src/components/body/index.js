import React from 'react'

import style from './style'
import ShowoffCarousel from '../carousel/index'

export default class Body extends React.Component {
  render () {
    return (
      <div>
        <div className={style.textInfoWrapper}>
          <div className={style.innerContent}>
            <div className={style.section}>
              Hi! I'm Michael. I like web apps. I like React. I like node. I
              like learning new things, but I like mixing it with tried and true
              tech at the same time. I'm pretty friendly, and I'll get along
              with a dev manager <span className={style.bold}>and</span> a
              project/product manager at the same time.
            </div>

            <div className={style.section}>
              I'm still younger in the lifecycle of my career, but not so young
              that I'm inexperienced. I've worked on some cool things that I'm
              proud of. Some for work, some for fun. Here's a list of those
              things that I find exceptionally exciting:
            </div>
          </div>
        </div>
        <ShowoffCarousel />
      </div>
    )
  }
}
