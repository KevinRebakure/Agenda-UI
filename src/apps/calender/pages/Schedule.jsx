// import global components
import NavBarBetween from '../../globals/components/NavBarBetween'
import PageFull from '../../globals/components/PageFull'
// import global assets
import { icons } from '../../globals/assets/images'
// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
import Icon from '../../globals/utilities/Icon'
// import local components
import DaySchedule from '../components/DaySchedule'
import EventTask from '../components/EventTask'

export default function Schedule() {
  return (
    <>
      <PageFull>
        <NavBarBetween>
          <GoogleIcon
            className="material-symbols-outlined text-2xl"
            label="keyboard_arrow_left"
          />

          <h1 className="text-xl font-bold">Schedule</h1>
          <Icon src={icons.smallMenuIcon} className="size-8" />
        </NavBarBetween>

        <div className="space-y-8 overflow-y-scroll">
          <DaySchedule month="Jan" date="30">
            <EventTask
              icon={icons.guitarIcon}
              task="Learn a few chords"
              time="11:00"
            />
            <EventTask icon={icons.shoesIcon} task="Take a walk" time="14:00" />
            <EventTask
              icon={icons.tvIcon}
              task="Watch breaking bad"
              time="15:00"
            />
          </DaySchedule>
          <DaySchedule month="Feb" date="24">
            <EventTask
              icon={icons.shoesIcon}
              task="Take a 30min jog"
              time="5:30"
            />
            <EventTask
              icon={icons.codeIcon}
              task="Work on the new React project"
              time="15:00"
            />
            <EventTask
              icon={icons.booksIcon}
              task="Start a new book"
              time="19:15"
            />
          </DaySchedule>
          <DaySchedule month="Mar" date="12">
            <EventTask
              icon={icons.guitarIcon}
              task="Learn a few chords"
              time="11:00"
            />
            <EventTask icon={icons.shoesIcon} task="Take a walk" time="14:00" />
          </DaySchedule>
        </div>
      </PageFull>
    </>
  )
}
