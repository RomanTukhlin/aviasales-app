import React from 'react'

import './TicketList.scss'
import { TicketItem } from '../CardItem/TicketItem'

export const TicketList = () => {
  // Не забыть перебрать через map
  return (
    <div className="ticket-list">
      <TicketItem />
    </div>
  )
}
