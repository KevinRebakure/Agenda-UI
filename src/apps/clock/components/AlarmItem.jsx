// import local utilities
import ToggleButton from '../utilities/ToggleButton'

export default function AlarmItem({ time }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p>
            <span className="text-4xl">{time}</span> AM
          </p>
          <p className=" text-sm">Mon, Tue, Wed, Thur, Fri</p>
        </div>
        
        <ToggleButton />
      </div>
    </>
  )
}
