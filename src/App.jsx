import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = React.useState([])
  const [input, setInput] = React.useState("")

  function saveUserInput(e) {
    setInput(e.target.value)
  }

  function getCityWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=977e8bc6d4594a2dad11cfaf7d63e7b3&units=metric`)
      .then(res => res.json())
      .then(data => (getTheRenderData(data))
      )
  }

  function getTheRenderData(data) {
    setWeatherData(prev => {
      let newArr = []
      newArr.push({
        id: data.city.id,
        key: data.city.id,
        city: data.city.name,
        country: data.city.country,
        tempC: data.list[0].main.temp,
        desc: data.list[0].weather[0].description,
        icon: data.list[0].weather[0].icon
      })
      return newArr
    })
  }
  console.log(weatherData)

  return (
    <div>
      <h2>Weather App</h2>
      <form action="">
        <input type="text"
          placeholder="city"
          onChange={saveUserInput}>
        </input>
        <button type="button"
          onClick={getCityWeather} className='search'>Search</button>
      </form>


    </div>
  )
}

export default App
