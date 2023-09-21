import React, { useState } from 'react'
import './Content.scss'

import { Tabs } from '../Tabs/Tabs'
import { TicketsList } from '../TicketsList/TicketsList'
import { Button } from '../Button/Button'

export const Content = ({ ticket }) => {
  const [countTickets, setCountTickets] = useState(5)
  const showMoreTicketsClick = () => {
    setCountTickets((prevState) => prevState + 5)
  }

  return (
    <div className="content">
      <Tabs />
      <TicketsList ticket={ticket} countTickets={countTickets} />
      <Button showMoreTicketsClick={showMoreTicketsClick}>Показать еще 5 билетов!</Button>
    </div>
  )
}
