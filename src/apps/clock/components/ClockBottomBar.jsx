// import global utilities
import Icon from "../../globals/utilities/Icon"
import { icons } from "../../globals/assets/images"
// import local
import { clockIcons } from "../assets/images"

export default function ClockBottomBar () {
    return (
      <>
        <div className="absolute bottom-0 z-10 flex w-full justify-around rounded-b-xl bg-mainwhite">
          <Icon
            src={icons.plusIcon}
            className="absolute bottom-20 size-12 rounded-full"
          />
          <p className="flex flex-col items-center justify-center gap-y-1 p-1 text-sm font-semibold text-mainBlue">
            <Icon src={clockIcons.alarmIcon} className="size-6" /> Alarm
          </p>
          <p className="flex flex-col items-center justify-center gap-y-1 p-1 text-sm font-semibold">
            <Icon src={clockIcons.clockDarkerIcon} className="size-6" /> Clock
          </p>
          <p className="flex flex-col items-center justify-center gap-y-1 p-1 text-sm font-semibold">
            <Icon src={clockIcons.countDownDarkerIcon} className="size-6" />
            Timer
          </p>
          <p className="flex flex-col items-center justify-center gap-y-1 p-1 text-sm font-semibold">
            <Icon src={clockIcons.stopWatchDarkerIcon} className="size-6" />
            Stopwatch
          </p>
        </div>
      </>
    )
}