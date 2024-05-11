// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageCenter from '../../globals/components/PageCenter'
// import local components
import ClockBottomBar from '../components/ClockBottomBar'
import StopWatchDisplay from '../components/StopWatchDisplay'

export default function Stopwatch() {
  return (
    <>
      <PageCenter>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Stopwatch" />

        <StopWatchDisplay />

        <ClockBottomBar />
      </PageCenter>
    </>
  )
}
