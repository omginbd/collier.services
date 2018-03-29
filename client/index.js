import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app'

ReactDOM.render(<App />, document.querySelector('#root'))

if (module.hot) {
  module.hot.dispose(() => {
    console.log('module is about to be replaced')
  })

  module.hot.accept(() => {
    console.log('module was just updated')
  })
}
