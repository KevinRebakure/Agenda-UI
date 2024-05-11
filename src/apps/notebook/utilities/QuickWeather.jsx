import { icons } from "../assets/images"

export default function QuickWeather () {
    return (
      <>
        <div className="flex items-center gap-x-2">
          <img src={icons.sunIcon} alt="" className="h-6 w-6" />
          <p>
            24<sup>0</sup> Hot day!
          </p>
        </div>
      </>
    )
}