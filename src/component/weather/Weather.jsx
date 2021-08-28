
import './index.css'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'
import refresh from '../../assets/images/refresh.png'
import rain from '../../assets/images/rain.png'
import sunny from '../../assets/images/sunny.png'
import thunderStorm from '../../assets/images/thunderStorm.png'
import cloudy from '../../assets/images/cloudy.png'
import snow from '../../assets/images/snow.png'

import React, { Component } from 'react'


//城市天气数据
const cityWeatherData = [
  {
    city: '重庆',
    weather: 'rain',
    currentTemperature: '23°',
    maxTemperature: '23°',
    minTemperature: '18°',
    describe: 'Light Rain',
    isLoadding: true
  },
  {
    city: '成都',
    weather: 'sunny',
    currentTemperature: '27°',
    maxTemperature: '30°',
    minTemperature: '23°',
    describe: 'Sunny',
    isLoadding: true
  },
  {
    city: '武汉',
    weather: 'thunderStorm',
    currentTemperature: '21°',
    maxTemperature: '23°',
    minTemperature: '18°',
    describe: 'thundershowers',
    isLoadding: true
  },
  {
    city: '黑龙江',
    weather: 'snow',
    currentTemperature: '20°',
    maxTemperature: '20°',
    minTemperature: '10°',
    describe: 'snow',
    isLoadding: true
  },
  {
    city: '上海',
    weather: 'cloudy',
    currentTemperature: '25°',
    maxTemperature: '30°',
    minTemperature: '18°',
    describe: 'cloudy',
    isLoadding: true
  }
]
let index = 0
let time
export default class weather extends Component {

  state = {
    // 当前城市天气信息
    currentCity: cityWeatherData[0]
  }

  // 上一个城市
  preCity = () => {
    clearTimeout(time)
    index--
    if(index === -1) {
      index = cityWeatherData.length - 1;
    }
    this.loadding(index)
    this.setState({
      currentCity: cityWeatherData[index],
    })
  }
  // 下一个城市
  nextCity = () => {
    clearTimeout(time)
    index++
    if(index === cityWeatherData.length) {
      index = 0;
    }
    this.loadding(index)
    this.setState({
      currentCity: cityWeatherData[index]
    })
  }

  // 加载
  loadding = (index) => {
    time = setTimeout(() => {
      cityWeatherData[index].isLoadding = false
      this.setState({
        currentCity: cityWeatherData[index]
      })
    }, 1000);
    
  }

  componentDidMount() {
    this.loadding(0)
  }
  
  render() {
    const {currentCity} = this.state
    return (
      <div className="Weather">
        <div className="weather-box">
          <h1>{currentCity.city}</h1>
          <img className="arrow pre" src={leftArrow} alt="" onClick={this.preCity} />
          <img className="arrow next" src={rightArrow} alt="" onClick={this.nextCity} />

          {
            currentCity.isLoadding ? 
              <img src={refresh} className="refresh" alt="" /> : (
              <div className="weatherInfo">
                <span className="weather-img">
                  {
                    currentCity.weather === 'rain' ? 
                    <img src={rain} alt="" /> : currentCity.weather === 'sunny' ?
                    <img className="sunnyStyle" src={sunny} alt="" /> : currentCity.weather === 'thunderStorm' ?
                    <img src={thunderStorm} alt="" /> : currentCity.weather === 'snow' ?
                    <img src={snow} alt="" /> : <img src={cloudy} alt="" /> 
                  }
                </span>
                
                <span className="currentTemperature">{currentCity.currentTemperature}</span>
                <span className="max-min">
                  <span className="max">{currentCity.minTemperature}</span>
                  <span className="min">{currentCity.maxTemperature}</span>
                </span>
                <p className="describe">{currentCity.describe}</p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
