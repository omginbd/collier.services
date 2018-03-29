import React from 'react'

import style from './style'
import Body from './components/body/index'
import Header from './components/header/index'
import Footer from './components/footer/index'

class App extends React.Component {
  render () {
    return (
      <div className={style.pageWrapper}>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App
