import './App.css'
import { Header } from './components/Header/Header'
import { Calendar } from './components/Calendar/Calendar'
import { Location } from './components/Location/Location'
import { Timing } from './components/Timing/Timing'

function App() {
  return (
    <div className="container">
      <Header />
      <Calendar />
      <Location />
      <Timing />
      <div style={{ height: 1000 }}></div>
    </div>
  )
}

export default App
