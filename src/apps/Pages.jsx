import Notebook from './notebook/Notebook'
import Calculator from './calculator/Calculator'
import Weather from './weather/Weather'
import Clock from './clock/Clock'
import Calender from './calender/Calender'

export default function Pages() {
  return (
    <>
      <Notebook />
      <Calculator />
      <Weather />
      <Clock />
      <Calender />
    </>
  )
}
