import React from 'react'
import './TicketItem.scss'

export const TicketItem = () => {
  return (
    <div className="ticket-item">
      <div className="ticket-item__price">13 400 Р </div>
      <div className="ticket-item__image">Airlines</div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">MOW – HKT</div>
        <div className="ticket-item__text">10:45 – 08:00</div>
      </div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">MOW – HKT</div>
        <div className="ticket-item__text">10:45 – 08:00</div>
      </div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">MOW – HKT</div>
        <div className="ticket-item__text">10:45 – 08:00</div>
      </div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">MOW – HKT</div>
        <div className="ticket-item__text">10:45 – 08:00</div>
      </div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">MOW – HKT</div>
        <div className="ticket-item__text">10:45 – 08:00</div>
      </div>
      <div className="ticket-item__info">
        <div className="ticket-item__title">MOW – HKT</div>
        <div className="ticket-item__text">10:45 – 08:00</div>
      </div>
    </div>
  )
}

// interface Ticket {
//   // Цена в рублях
//   price: number
//   // Код авиакомпании (iata)
//   carrier: string
//   // Массив перелётов.
//   // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
//   segments: [
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета туда
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     },
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета обратно
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     }
//   ]
// }
