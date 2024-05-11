// import global utilities
import GoogleIcon from "../../globals/utilities/GoogleIcon"
import Icon from "../../globals/utilities/Icon"

export default function Task({ task, icon }) {
  return (
    <>
      <div className="flex items-center gap-x-1 rounded-lg px-3 py-2">
        <Icon src={icon} className="h-8 w-8" />

        <div>
          <p className="break-words leading-tight">{task}</p>
          <div className="flex items-center gap-x-2 text-xs">
            <p>
              Feb 25<sup>th</sup>, 2024
            </p>
            <p className="break-words">Planned to do</p>
          </div>
        </div>

        <GoogleIcon className="ml-auto text-2xl" label="keyboard_arrow_down" />
      </div>
    </>
  )
}
