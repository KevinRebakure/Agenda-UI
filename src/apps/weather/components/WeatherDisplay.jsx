// import global utilities
import Icon from "../../globals/utilities/Icon"
// import local assets
import { weatherIcons } from "../assets/images"

export default function WeatherDisplay() {
    return (
      <>
        <div className="space-y-5 p-3 text-center">
          <Icon src={weatherIcons.cloudsIcon} className="m-auto size-10 " />
          <p className="">Sunday, March 3</p>
          <p className=" text-8xl">21&deg;</p>
          <p className=" font-bold">Kigali</p>
        </div>
      </>
    )
}