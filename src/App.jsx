import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Today from "./utilities/Date"

function App() {
  const [weatherData, setWeatherData] = React.useState(null)
  const [input, setInput] = React.useState("")
  const [isData, setIsData] = React.useState(false)
  let today = Today()

  function saveUserInput(e) {
    setInput(e.target.value)

  }

  function getCityWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=977e8bc6d4594a2dad11cfaf7d63e7b3&units=metric`)
      .then(res => res.json())
      .then(data => {

        getTheRenderData(data)
      }

      )
  }

  function getTheRenderData(data) {
    setWeatherData({
      id: data.city.id,
      key: data.city.id,
      city: data.city.name,
      country: data.city.country,
      humidity: data.list[0].main.humidity,
      airPressure: data.list[0].main.pressure,
      visibility: data.list[0].visibility,
      wind: data.list[0].wind.speed,
      tempC: data.list[0].main.temp,
      desc: data.list[0].weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    })
  }
  React.useEffect(() => {
    weatherData ? setIsData(true) : setIsData(false)
  }, [weatherData])

  console.log(weatherData)
  return (
    <>
      <h2 className='app-name'>Weather App</h2>
      <div className='main'>
        <form action="" className={isData ? "change-order" : ""} >
          <input type="text"
            placeholder="enter city name"
            onChange={saveUserInput}>
          </input>
          <button type="button"
            onClick={getCityWeather} className='search'>Search</button>
        </form>
        {weatherData ? (
          <div className="data-container">
            <div className='heading'>
              <h2 className="name">{weatherData.city}, {weatherData.country}</h2>
              <p className='date'>{today}</p>
              <img className="icon" src={weatherData.icon}></img>
              <div className='temp-container'>
                <h1>{weatherData.tempC} &#8451;</h1>
                <p className='desc'>{weatherData.desc}</p>
              </div>
              <div className='other-info'>
                <div className='other humid'>
                  <h2>Humidity</h2>
                  <h3>{weatherData.humidity}%</h3>
                </div>
                <div className='other pressure'>
                  <h2>Pressure</h2>
                  <h3>{weatherData.airPressure} mb</h3>
                </div>
                <div className='other wind'>
                  <h2>wind</h2>
                  <h3>{weatherData.wind} mph</h3>
                </div>
                <div className='other visibility'>
                  <h2>Visibility</h2>
                  <h3>{weatherData.visibility} miles</h3>
                </div>
              </div>
            </div>
          </div>
        )
          :
          <></>
        }
      </div>
    </>
  )
}

export default App
