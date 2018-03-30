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
              <h2>Who am I?</h2>
              Hi! I'm Michael. I'm a hard worker, fast learner, active problem
              solver. Lehi, Utah is where I call home, but I'm sure there are a
              lot of exciting places around the world! I'm pretty friendly, and
              I get along with my dev manager{' '}
              <span className={style.bold}>and</span> my product manager at the
              same time.
            </div>
            <div className={style.section}>
              <h2>What do I like?</h2>
              I like web apps. I like React. I like node. I like learning new
              things, but I like mixing it with tried and true tech at the same
              time. I like the quick and dirty, rapid iteration of startup
              development. I like stable production apps with analytics and
              monitoring. I like delivering products that make customers' jaws
              drop. "This will save me <span className={style.bold}>
                so
              </span>{' '}
              much time!" is one of my favorite things to hear.
            </div>

            <div className={style.section}>
              <h2>What have I done?</h2>
              I'm still younger in the lifecycle of my career, but not so young
              that I'm inexperienced. I've worked on some cool things that I'm
              proud of. Some for work, some for fun. Here's a list of some
              things that I find to be exceptionally exciting:
            </div>
          </div>
        </div>
        <ShowoffCarousel />
      </div>
    )
  }
}
