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
        <img
          src="https://psv4.userapi.com/s/v1/d2/gCdX0jKBVdXKMWfgzFPDygageYeODWuVX-Rnzxt9MAvSBeLT7LpBfP4L9RUMMTSHYSKVxQs8RQR7PEyvwh_LGaDe1SVFMJu6Hsf9mNLVCqnxM-w0Mlwo1Qy1icY_B7qX-NltCdtwBOJr/calendar-bg.png"
          alt="calendar"
          className="calendar-img"
        />
        <p className="calendar-date-time">
          10 ЯНВАРЯ
          <br />
          14:00
        </p>
      </div>
    </section>
  )
}
