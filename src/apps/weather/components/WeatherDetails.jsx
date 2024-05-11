// import local utilities
import WeatherDetailsItem from "../utilities/WeatherDetailsItem"
// import local assets
import { weatherIcons } from "../assets/images"

export default function WeatherDetails () {
    return (
      <>
        <div className="flex justify-evenly ">
          <WeatherDetailsItem
            label="25%"
            icon={weatherIcons.precipitationIcon}
          />
          <WeatherDetailsItem
            label="65%"
            icon={weatherIcons.humidityIcon}
          />
          <WeatherDetailsItem
            label="6kmh"
            icon={weatherIcons.windspeedIcon}
          />
        </div>
      </>
    )
}