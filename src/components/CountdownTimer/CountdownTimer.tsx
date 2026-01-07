import React, { useState, useEffect } from 'react'
import './CountdownTimer.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const targetDate = new Date('2026-01-10T14:30:00').getTime()

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
  }

  const pluralize = (count: number, words: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2]
    const wordIndex = count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]

    return words[wordIndex]
  }

  return (
    <div className="img-container ">
      <section className="countdown-timer-container">
        <h2 className="countdown-timer-title">До свадьбы осталось:</h2>
        <div className="countdown-timer-counter-container">
          <div className="countdown-timer-counter-item">
            <p className="countdown-timer-text">{formatNumber(timeLeft.days)}</p>
            <p className="countdown-timer-text">
              {pluralize(timeLeft.days, ['день', 'дня', 'дней'])}
            </p>
          </div>

          <div className="countdown-timer-counter-item">
            <p className="countdown-timer-text">{formatNumber(timeLeft.hours)}</p>
            <p className="countdown-timer-text">
              {pluralize(timeLeft.hours, ['час', 'часа', 'часов'])}
            </p>
          </div>

          <div className="countdown-timer-counter-item">
            <p className="countdown-timer-text">{formatNumber(timeLeft.minutes)}</p>
            <p className="countdown-timer-text">
              {pluralize(timeLeft.minutes, ['минута', 'минуты', 'минут'])}
            </p>
          </div>

          <div className="countdown-timer-counter-item">
            <p className="countdown-timer-text">{formatNumber(timeLeft.seconds)}</p>
            <p className="countdown-timer-text">
              {pluralize(timeLeft.seconds, ['секунда', 'секунды', 'секунд'])}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
