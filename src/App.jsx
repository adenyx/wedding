import './App.css'
import { Header } from './components/Header/Header'
import { Calendar } from './components/Calendar/Calendar'
import { Location } from './components/Location/Location'
import { Timing } from './components/Timing/Timing'
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer'
import { WishesSlider } from './components/WishesSlider/WishesSlider'
import { DressCode } from './components/DressCode/DressCode'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Calendar />
      <Location />
      <Timing />
      <DressCode />
      <CountdownTimer />
      <WishesSlider />
      <Footer />
    </div>
  )
}

export default App
