// import global components
import NavBarBetween from '../../globals/components/NavBarBetween'
import PageCenter from '../../globals/components/PageCenter'
// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
// import local utilities
import HomeButton from '../utilities/HomeButton'
import QuickWeather from '../utilities/QuickWeather'
// import local components
import NotebookBottom from '../components/NotebookBottom'
import Task from '../components/Task'
import NoteNav from '../components/NoteNav'
// import local assets
import { icons } from '../assets/images'

export default function ToDoHomeExpanded() {
  return (
    <>
      <PageCenter>
        <div className="space-y-1 self-stretch">
          <NavBarBetween>
            <GoogleIcon className="text-4xl" label="menu" />
            <HomeButton label="ToDo" />
            <HomeButton label="Notes" />
            <QuickWeather />
          </NavBarBetween>

          <NoteNav />
        </div>

        <div className="flex flex-col gap-y-1 self-stretch overflow-y-scroll">
          <Task icon={icons.guitarIcon} task="Play guitar" />
          <Task icon={icons.shoesIcon} task="Work out" />
          <Task icon={icons.codeIcon} task="Learn to code" />
          <Task icon={icons.monitorIcon} task="Watch breaking bad" />
        </div>
        <NotebookBottom />
      </PageCenter>
    </>
  )
}
