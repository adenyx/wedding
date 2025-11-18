import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './WishesSlider.css'

const items = [
  'Будем очень признательны, если Вы воздержитесь от криков «Горько». Ведь поцелуй – это знак выражения чувств, и он не может быть по заказу.',
  'Пожалуйста, не дарите нам цветы! Мы не успеем насладиться их красотой и ароматом. Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи.',
  'Мы постараемся подарить море положительных эмоций! Осталось только захватить с собой хорошее настроение.'
]

export const WishesSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  }

  const openGoogleForm = () => {
    const formLink =
      'https://docs.google.com/forms/d/e/1FAIpQLSeSKTaqOHniq2wWNIkDnFSfj1Hx1BQH09rIXWv8dO_qfozkng/viewform?usp=dialog'
    window.location.href = formLink
  }

  return (
    <section className="wishes-slider-container">
      <h2 className="wishes-title">Пожелания</h2>
      <div className="wishes-separator-small" />
      <div className="wishes-slider">
        <Slider {...settings}>
          {items.map((text) => (
            <div key={text} className="wishes-slider-item">
              <p className="wishes-slider-text">{text}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="wishes-separator-small" />
      <button type="button" onClick={openGoogleForm} className="button wishes-button">
        Заполнить анкету гостя
      </button>
    </section>
  )
}
