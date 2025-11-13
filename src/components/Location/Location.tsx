import './Location.css'

export const Location = () => {
  const handleClick = () => {
    window.location.href = 'yandexmaps://maps.yandex.ru/?rtext=~53.908864,27.556592'

    setTimeout(
      () => (window.location.href = 'https://yandex.ru/maps/?rtext=~53.908864,27.556592'),
      1000
    )
  }
  return (
    <section className="location-container">
      <div className="location-wrapper">
        <img
          src="https://avatars.mds.yandex.net/get-altay/7740052/2a000001883ce3d2f7851a1197a863107050/XXXL"
          alt="location image"
          className="location-img"
        />
      </div>

      <div className="location-wrapper">
        <h2 className="location-text-title">Место проведения</h2>
        <p className="location-text">
          ЗАГС Центрального района г. Минска
          <br />
          ул. Комсомольская блаблабла
        </p>
        <button onClick={handleClick} className="button">
          Как добраться
        </button>
      </div>
    </section>
  )
}
