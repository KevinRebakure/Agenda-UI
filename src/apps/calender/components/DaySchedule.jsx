// import local utilities
import SmallDate from "../utilities/SmallDate"

export default function DaySchedule ({children, month, date}) {
    return (
      <>
        <div className="flex space-x-5">
          <SmallDate month={month} date={date}/>

          <div className="space-y-2 w-full">
            {children}
          </div>
        </div>
      </>
    )
}