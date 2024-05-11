// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageCenter from '../../globals/components/PageCenter'
// import local components
import ClockBottomBar from '../components/ClockBottomBar'

import AlarmItem from '../components/AlarmItem'

export default function Alarm() {
  return (
    <>
      <PageCenter>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Alarm" />
        <p>kevin</p>
        <div className="space-y-8 self-stretch overflow-y-scroll">
          <AlarmItem time="7:00" />
          <AlarmItem time="8:15" />
          <AlarmItem time="9:45" />
          <AlarmItem time="6:10" />
          <AlarmItem time="5:30" />
          <AlarmItem time="4:00" />
          <AlarmItem time="8:00" />
          <AlarmItem time="10:00" />
          <AlarmItem time="11:30" />
          <AlarmItem time="9:45" />
          <AlarmItem time="10:40" />
          <AlarmItem time="7:25" />
        </div>

        <ClockBottomBar />
      </PageCenter>
    </>
  )
}
