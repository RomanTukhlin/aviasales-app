import React, { useState } from 'react'

import './App.scss'
import { Filters } from './components/Filters/Filters'
import { Content } from './components/Content/Content'

export default function App() {
  const [ticket] = useState([]) // setTicket
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__logo logo">
          <img src="./logo.svg" alt="Aviasales-logo" />
        </div>
        <div className="app__content">
          <Filters />
          <Content ticket={ticket} />
        </div>
      </div>
    </div>
  )
}
