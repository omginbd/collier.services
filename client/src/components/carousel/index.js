import { map } from 'lodash'
import React from 'react'

import style from './style'

export default class ShowoffCarousel extends React.Component {
  render () {
    return (
      <div className={style.carouselWrapper}>
        <ShowoffCard link='https://byui.edu/catalog' title='Kuali Catalog'>
          Kuali makes software that saves people time. I was the sole developer
          on Kuali Catalog for the year and a half of it's existence. I met with
          customers, managed and met deadlines and expectations, and coded the
          app. Catalog provides a turn-key solution for schools that don't want
          to manage their academic catalog by hand.
        </ShowoffCard>
        <ShowoffCard
          link='http://store.steampowered.com/app/261510/Tesla_Effect_A_Tex_Murphy_Adventure/'
          title='Tex Murphy'
        >
          I was one of four developers who put together a revival of a
          twenty-year-old cult classic video game on a shoestring, Kickstarted,
          budget. I also helped manage the Kickstarter campaign, run a
          teleprompter, and a bunch of other things I'd never expected to be
          involved in game development.
        </ShowoffCard>
        <ShowoffCard link='https://wiffleball.xyz' title='Golfbot'>
          With the tenth annual Wiffleball Open rapidly approaching, the Poulton
          Golf Association (PGA) is the premier golf association of Bountiful,
          Utah. When tallying round totals and maintaining a leaderboard became
          tedious, I built Golfbot - a system for people to keep track of scores
          on their phone, updating the leaderboard as the tournament progresses.
        </ShowoffCard>
      </div>
    )
  }
}

const ShowoffCard = ({ children, link, title }) => {
  return (
    <div className={style.card}>
      <h3 className={style.cardTitle}>{title}</h3>
      <div className={style.cardContent}>{children}</div>
      <div className={style.cardFooter}>
        <button
          className={style.cardButton}
          onClick={() => window.open(link, '_blank')}
        >
          Check it out!
        </button>
      </div>
    </div>
  )
}
