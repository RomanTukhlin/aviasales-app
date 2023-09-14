import React from 'react'

import './Content.scss'
import { Tabs } from '../Tabs/Tabs'
import { TicketList } from '../CardList/TicketList'
import { Button } from '../Button/Button'

export const Content = ({ ticket }) => {
  return (
    <div className="content">
      <Tabs />
      <TicketList ticket={ticket} />
      <Button>Показать еще 5 билетов!</Button>
    </div>
  )
}
