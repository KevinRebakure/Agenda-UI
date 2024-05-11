// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageCenter from '../../globals/components/PageCenter'
// import local components
import ClockBottomBar from '../components/ClockBottomBar'
import SetCountDown from '../components/SetCountDown'

export default function CountDown() {
  return (
    <>
      <PageCenter>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="CountDown" />

        <SetCountDown />

        <ClockBottomBar />
      </PageCenter>
    </>
  )
}
