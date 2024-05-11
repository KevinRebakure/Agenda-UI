// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
// import local utilites
import SetCountDownDisplay from '../utilities/SetCountDownDisplay'
import Keys from '../utilities/Keys'

export default function SetCountDown() {
  const numbers = () => {
    const n = []
    for (let i = 0; i < 9; i++) {
      n.push(i + 1)
    }
    return n
  }

  return (
    <>
      <div className="relative space-y-4 overflow-y-scroll ">
        <SetCountDownDisplay />

        <div className="m-auto grid grid-cols-3 gap-1 ">
          {numbers().map((number, index) => {
            return <Keys key={index} label={number} />
          })}
          <Keys label="00" />
          <Keys label={0} />
          <Keys
            label={
              <GoogleIcon
                className="flex size-20 items-center justify-center rounded-full bg-darkBlue bg-opacity-5 text-xl"
                label="backspace"
              />
            }
          />
        </div>
      </div>
    </>
  )
}
