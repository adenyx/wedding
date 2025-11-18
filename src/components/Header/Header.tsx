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
        src="https://sun9-33.userapi.com/s/v1/ig2/9RJ80NUMW4l9Q-hNVACEuLsg-lBKH0hIGRb0Z3g-fIZncezpWRn1yYlhVa8Gj8uH4KvHiwfJJersamT5rlOkR8Lu.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&u=rvgfbALV_gSajZbCDneQg6_jH1SLnYrgEOAFn-cVhQ8&cs=2560x0"
        alt="header"
        className="header-img"
      />
    </section>
  )
}
