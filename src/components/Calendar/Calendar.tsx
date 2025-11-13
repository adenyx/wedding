import './Calendar.css'

export const Calendar = () => {
  return (
    <section className="calendar-container">
      <div className="calendar-wrapper">
        <h2 className="calendar-text-title">Дорогие друзья!</h2>
        <p className="calendar-text">
          Это официальное приглашение на нашу свадьбу! А получили вы его потому, что мы очень хотим
          видеть вас в этот день рядом с нами!
        </p>
      </div>
      <div className="calendar-wrapper">
        <img src="src/assets/calendar-bg.png" alt="calendar image" className="calendar-img" />
        <p className="calendar-date-time">
          10 ЯНВАРЯ
          <br />
          14:00
        </p>
      </div>
    </section>
  )
}
