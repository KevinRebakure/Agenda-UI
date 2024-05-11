// import global components
import NavBarBetween from '../../globals/components/NavBarBetween'
import PageCenter from '../../globals/components/PageCenter'
// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
import Icon from '../../globals/utilities/Icon'
// import local utilities
import HomeButton from '../utilities/HomeButton'
import QuickWeather from '../utilities/QuickWeather'
// import local components
import NotebookBottom from '../components/NotebookBottom'
import Text from '../components/Text'
// import local assets
import { icons } from '../assets/images'

export default function NoteHome() {
  return (
    <>
      <PageCenter>
        <div className="self-stretch">
          <NavBarBetween>
            <GoogleIcon className="text-4xl" label="menu" />
            <HomeButton label="ToDo" />
            <HomeButton label="Notes" />
            <QuickWeather />
          </NavBarBetween>

          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">All notes</h1>
            <Icon src={icons.smallMenuIcon} className="size-8" />
          </div>
        </div>

        <div className="quotes flex flex-col gap-y-2 self-stretch overflow-y-scroll">
          <Text
            color="bg-iconbrown"
            title="Check out that new cafe"
            label="travel"
          />
          <Text color="bg-iconred" title="Learn React Router" label="coding" />
          <Text color="bg-icongreen" title="Am chord" label="music" />
          <Text color="bg-iconblue" title="Jog for 30 min" label="workout" />
          <Text
            color="bg-iconpurple"
            title="Start breaking bad Season 4"
            label="movies"
          />
          <Text color="bg-iconred" title="Attend my session" label="therapy" />
          <Text
            color="bg-iconpink"
            title={`Kevin's birthday party`}
            label="party"
          />
          <Text color="bg-iconblue" title="11.00 mass" label="church" />
        </div>

        <NotebookBottom />
      </PageCenter>
    </>
  )
}
