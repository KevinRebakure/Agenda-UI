// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageFull from '../../globals/components/PageFull'
// import local components
import MenuLink from '../components/MenuLink'
import Avatar from '../components/Avatar'
// import local assets
import { icons } from '../assets/images'

export default function Menu() {
  return (
    <>
      <PageFull>
        <NavBarCenter googleLabel="close" textLabel="Agenda" />
        <div className="space-y-5 overflow-y-scroll">
          <Avatar page="menu" />

          <div className="space-y-4">
            <p className="text-sm">Widgets</p>
            <MenuLink menuIcon={icons.notebookIcon} textLabel="Note it" />
            <MenuLink menuIcon={icons.weatherIcon} textLabel="Weather" />
            <MenuLink menuIcon={icons.calculatorIcon} textLabel="Calculator" />
            <MenuLink menuIcon={icons.clockIcon} textLabel="Clock" />
            <MenuLink menuIcon={icons.calendarIcon} textLabel="Calender" />
            <p className="text-sm">About</p>
            <MenuLink
              menuIcon={icons.bracketIcon}
              textLabel="Developer Documentation"
            />
            <MenuLink
              menuIcon={icons.tagIcon}
              textLabel="Credits & Attributes"
            />
          </div>
          <p className="self-center font-bold">A Kevin Rebakure Production</p>
        </div>
      </PageFull>
    </>
  )
}
