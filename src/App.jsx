import './App.css'
import { Header } from './components/Header/Header'
import { Calendar } from './components/Calendar/Calendar'
import { Location } from './components/Location/Location'

function App() {
  return (
    <div className="container">
      <Header />
      <Calendar />
      <Location />
      <div style={{ height: 100 }}></div>
    </div>
  )
}

export default App
