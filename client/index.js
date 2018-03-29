import React from 'react'
import ReactDOM from 'react-dom'

import './src/style'
import Body from './src/components/body/index'
import Footer from './src/components/footer/index'
import Header from './src/components/header/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('main'))

if (module.hot) {
  module.hot.dispose(() => {
    console.log('module is about to be replaced')
  })

  module.hot.accept(() => {
    console.log('module was just updated')
  })
}
