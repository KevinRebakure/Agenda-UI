// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageCenter from '../../globals/components/PageCenter'
// import local components
import Table from '../components/Table'
import QuickAccess from '../components/QuickAccess'

export default function Month() {
  return (
    <>
      <PageCenter>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Calender" />

        <Table />

        <QuickAccess />
      </PageCenter>
    </>
  )
}
