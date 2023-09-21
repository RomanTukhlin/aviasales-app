import React, { useEffect } from 'react'
import { Spin, Alert } from 'antd'
import { Offline, Online } from 'react-detect-offline'
import './TicketsList.scss'
import { useDispatch, useSelector } from 'react-redux'

import { TicketItem } from '../TicketItem/TicketItem'
import { getSearchId, getTickets } from '../../service/AviasalesService'

export const TicketsList = ({ countTickets }) => {
  const dispatch = useDispatch()
  const filterStatus = useSelector((state) => state.checkbox.filterStatus)
  const activeSort = useSelector((state) => state.sort.active)
  const { tickets, stopStatus, searchId } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])
  useEffect(() => {
    if (searchId && stopStatus === false) {
      dispatch(getTickets(searchId))
    }
    if (tickets === 0) {
      dispatch(getTickets(searchId))
    }
  }, [stopStatus, searchId, tickets])
  useEffect(() => {
    sortTickets(activeSort, tickets)
  }, [activeSort, tickets])

  const sortTickets = (id, tickets) => {
    switch (id) {
      case 'free':
        return [...tickets].sort((a, b) => a.price - b.price)
      case 'fast':
        return [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      case 'optimal':
        return [...tickets].sort((a, b) => a.price - b.price && a.segments[0].duration - b.segments[0].duration)
      default:
        return tickets
    }
  }
  const filterTickets = (tickets, arrFilter) => {
    if (arrFilter.length === 4) return tickets
    if (!arrFilter.length) return []
    return arrFilter
      .map((filter) =>
        tickets.filter((ticket) => {
          switch (filter) {
            case 'noTransfer':
              return ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
            case 'oneTransfer':
              return ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
            case 'twoTransfer':
              return ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
            case 'threeTransfer':
              return ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
            default:
              return ticket
          }
        })
      )
      .flat()
  }
  const filter = filterTickets(tickets, filterStatus)
  return (
    <div className="ticket-list">
      <Offline>
        <Alert
          message="Нет доступа в интернет!"
          type="error"
          showIcon
          description="Проверьте подключение к интернету."
        />
      </Offline>
      <Online>{stopStatus !== true && <Spin size="large" className="ticket-list__spin" />}</Online>
      {<RenderTickets tickets={sortTickets(activeSort, filter)} countTickets={countTickets} />}
    </div>
  )
}

const RenderTickets = ({ countTickets, tickets }) => {
  return tickets.map(({ id, price, carrier, segments }, index) => {
    return index < countTickets ? <TicketItem key={id} price={price} carrier={carrier} segments={segments} /> : null
  })
}
