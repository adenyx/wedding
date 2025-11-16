import './Header.css'

export const Header = () => {
  return (
    <section className="header-container">
      <h1 className="header-title">Свадебный Вестник</h1>

      <div className="header-separator" />

      <div className="header-description">
        <p className="header-text">ПРИГЛАШЕНИЕ НА СВАДЬБУ</p>

        <p className="header-text">10 ЯНВАРЯ 2026</p>
      </div>

      <div className="header-separator-small" />

      <p className="header-conclusion-title">АЛИНА & ДЕНИС РЕШИЛИ ПОЖЕНИТЬСЯ!</p>

      <div className="header-separator" />

      <p className="heading-3 header-text">ГЛАВНАЯ СВАДЬБА ГОДА</p>

      <div className="header-separator-small" />

      <img
        src="https://psv4.userapi.com/s/v1/d2/v9TBj8204k51HFof3DwKFUXlXkoNtHwIq8MOuR4AwBoQkoX2sY9HbTRB-ZZpu1j3HvtRxmfN4TtM5lEGr0iJJ4-oC_XZVeX0i-6srz7FMjrbHNOAqmn02W9MeDiL68TD_56fNRoPkQ1P/IMG_3768.jpg"
        alt="header"
        className="header-img"
      />
    </section>
  )
}
