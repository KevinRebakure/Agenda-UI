// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageCenter from '../../globals/components/PageCenter'
// import local components
import ClockBottomBar from '../components/ClockBottomBar'

import TimeDisplay from '../components/TimeDisplay'

export default function Time() {
  return (
    <>
      <PageCenter>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Clock" />

        <div className="space-y-8 self-stretch overflow-y-scroll">
          <TimeDisplay />
          <TimeDisplay />
        </div>

        <ClockBottomBar />
      </PageCenter>
    </>
  )
}
