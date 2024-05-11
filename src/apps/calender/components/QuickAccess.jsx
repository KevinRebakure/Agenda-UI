// import global utilites
import GoogleIcon from "../../globals/utilities/GoogleIcon"
// import global assets
import { icons } from "../../globals/assets/images"
// import local components
import EventTask from "./EventTask"

export default function QuickAccess() {
  return (
    <>
      <div className="absolute bottom-0 w-full space-y-3 rounded-xl border bg-gradient-to-b from-darkBlue to-mainBlue p-4 text-mainwhite">
        <div className="space-y-3">
          <h1 className="font-semibold">Today's stuff</h1>

          <div className="space-y-2">
            <EventTask
              icon={icons.guitarIcon}
              task="Play guitar"
              time="18:00"
            />
            <EventTask
              icon={icons.tvIcon}
              task="Watch breaking bad"
              time="22:00"
            />
            <EventTask
              icon={icons.shoesIcon}
              task="Take a morning jog"
              time="5:15"
            />
            <EventTask
              icon={icons.booksIcon}
              task="Read Atomic habits"
              time="17:30"
            />
          </div>
        </div>

        <GoogleIcon
          className="m-auto flex size-12 flex-col items-center justify-center rounded-full border text-4xl"
          label="neurology"
        />
      </div>
    </>
  )
}
