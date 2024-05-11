// import global utilities
import Icon from '../../globals/utilities/Icon'

export default function WeatherDetailsItem({ label, icon }) {
  return (
    <>
      <p className="flex flex-col items-center rounded-lg bg-mainwhite bg-opacity-5 px-8 py-4">
        <Icon src={icon} className="size-10" />
        {label}
      </p>
    </>
  )
}
