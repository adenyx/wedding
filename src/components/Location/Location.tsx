import './Location.css'

export const Location = () => {
  const openDeeplink = () => {
    const deeplink = 'yandexmaps://maps.yandex.ru/?rtext=~53.908864,27.556592'
    const fallback = 'https://yandex.ru/maps/?rtext=~53.908864,27.556592'
    const timeout = 1000
    let fallbackTriggered = false
    // eslint-disable-next-line prefer-const
    let timer: number | undefined

    const cleanup = () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('pagehide', onPageHide)
      window.removeEventListener('blur', onBlur)
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        cleanup()
      }
    }

    const onPageHide = () => {
      cleanup()
    }

    const onBlur = () => {
      cleanup()
    }

    const triggerFallback = () => {
      if (!fallbackTriggered) {
        fallbackTriggered = true
        cleanup()
        window.location.href = fallback
      }
    }

    // Регистрируем события для отмены таймаута
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('pagehide', onPageHide)
    window.addEventListener('blur', onBlur)

    // Пытаемся открыть deeplink
    window.location.href = deeplink

    // Запускаем таймаут
    timer = setTimeout(triggerFallback, timeout)
  }

  return (
    <section className="location-container">
      <div className="location-wrapper">
        <img
          src="https://avatars.mds.yandex.net/get-altay/7740052/2a000001883ce3d2f7851a1197a863107050/XXXL"
          alt="location"
          className="location-img"
        />
      </div>

      <div className="location-wrapper">
        <h2 className="location-text-title">Место проведения</h2>
        <p className="location-text">
          ЗАГС Центрального района г. Минска
          <br />
          ул. Максима Богдановича 17а
        </p>
        <button type="button" onClick={openDeeplink} className="button">
          Как добраться
        </button>
      </div>
    </section>
  )
}
