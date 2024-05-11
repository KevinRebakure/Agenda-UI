// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageFull from '../../globals/components/PageFull'
// import global utilities
import { icons } from '../../globals/assets/images'
import EventTask from '../components/EventTask'

export default function Day() {
  return (
    <>
      <PageFull>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="March 12" />

        <div className="space-y-5 overflow-y-scroll">
          <h1 className="text-sm font-semibold">Events</h1>

          <EventTask icon={icons.guitarIcon} task="Play guitar" time="14:00" />
          <EventTask
            icon={icons.tvIcon}
            task="Watch Game of thrones"
            time="15:00"
          />
          <EventTask icon={icons.shoesIcon} task="Take a jog" time="16:30" />

          <h1 className="text-sm font-semibold">Tasks</h1>

          <EventTask icon={icons.codeIcon} task="Learn React" time="21:00" />
          <EventTask
            icon={icons.booksIcon}
            task="Start the new book"
            time="20:15"
          />
          <EventTask icon={icons.guitarIcon} task="Am7 chord" time="21:30" />
        </div>
      </PageFull>
    </>
  )
}
