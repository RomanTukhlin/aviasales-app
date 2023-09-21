import React from 'react'
import uniqid from 'uniqid'
import { format } from 'date-fns'
import { Image } from 'antd'
import './TicketItem.scss'

export const TicketItem = ({ price, carrier, segments }) => {
  const priceFix = (price) => {
    const priceToArray = price.toString().split('')
    const priceLength = priceToArray.length
    if (priceLength === 4) {
      const first = priceToArray.slice(0, 1).join('')
      const second = priceToArray.slice(1, priceLength).join('')
      return `${first} ${second}Р`
    }
    if (priceLength === 5) {
      const first = priceToArray.slice(0, 2).join('')
      const second = priceToArray.slice(2, priceLength).join('')
      return `${first} ${second}Р`
    }
    if (priceLength === 6) {
      const first = priceToArray.slice(0, 3).join('')
      const second = priceToArray.slice(3, priceLength).join('')
      return `${first} ${second}Р`
    }
  }
  const segmentsRender = () => {
    return segments.map(({ date, duration, origin, destination, stops }) => {
      return (
        <SegmentsItem
          key={uniqid()}
          date={date}
          duration={duration}
          origin={origin}
          destination={destination}
          stops={stops}
        />
      )
    })
  }
  return (
    <div className="ticket-item">
      <div className="ticket-item__price">{priceFix(price)}</div>
      <div className="ticket-item__image">
        <Image
          preview={false}
          width="inherit"
          height="inherit"
          src="error"
          fallback={`https://pics.avs.io/1000/1000/${carrier}.svg`}
        />
      </div>
      <div className="ticket-item__content">{segmentsRender()}</div>
    </div>
  )
}

const SegmentsItem = ({ date, destination, stops, duration, origin }) => {
  const correctStopsWord = (stopsLength) => {
    return stopsLength === 1 ? 'пересадка' : stopsLength >= 2 && stopsLength <= 4 ? 'пересадки' : 'пересадок'
  }
  const rangeTimeCorrect = (date, duration) => {
    const firstTime = format(Date.parse(date), 'HH:mm')
    const secondTime = format(new Date(Date.parse(date) + duration * 60000), 'HH:mm')
    return `${firstTime} - ${secondTime}`
  }
  const correctTime = (time) => {
    const hours = (time / 60).toFixed(0)
    const minutes = time % 60
    return `${hours}ч ${minutes}м`
  }
  return (
    <div className="ticket-item__body">
      <div className="ticket-item__info">
        <div className="ticket-item__title">
          {origin} - {destination}
        </div>
        <div className="ticket-item__text">{rangeTimeCorrect(date, duration)}</div>
      </div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">в пути</div>
        <div className="ticket-item__text">{correctTime(duration)}</div>
      </div>
      <div className="ticket-item__info">
        {!stops.length && (
          <>
            <div className="ticket-item__title">0 пересадок</div>
            <div className="ticket-item__text">без пересадок</div>
          </>
        )}
        {stops.length !== 0 && (
          <>
            <div className="ticket-item__title">{`${stops.length} ${correctStopsWord(stops.length)}`}</div>
            <div className="ticket-item__text">{stops.join(', ')}</div>
          </>
        )}
      </div>
    </div>
  )
}
