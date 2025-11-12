import './Header.css'

export const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Свадебный Вестник</h1>

      <div className="header-separator" />

      <div className="header-description">
        <p className="header-invitation">ПРИГЛАШЕНИЕ НА СВАДЬБУ</p>

        <p className="header-date">10 ЯНВАРЯ 2026</p>
      </div>

      <div className="header-separator-small" />

      <p className="header-conclusion-title">АЛИНА & ДЕНИС РЕШИЛИ ПОЖЕНИТЬСЯ!</p>

      <div className="header-separator" />

      <p className="heading-3">ГЛАВНАЯ СВАДЬБА ГОДА</p>

      <div className="header-separator-small" />

      <img src="src/assets/header.jpg" alt="header image" className="header-img" />
    </div>
  )
}
