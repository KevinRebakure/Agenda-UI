// import global components
import PageFull from '../globals/components/PageFull'
// import global utilities
import GoogleIcon from '../globals/utilities/GoogleIcon'
// import local components
import WeatherDisplay from './components/WeatherDisplay'
import WeatherDetails from './components/WeatherDetails'

export default function NumberFirst() {
  return (
    <>
      <PageFull
        bg="bg-gradient-to-b from-darkBlue to-mainBlue"
        color="mainwhite"
      >
        <GoogleIcon
          className="material-symbols-outlined text-2xl text-mainwhite"
          label="close"
        />

        <WeatherDisplay />

        <WeatherDetails />

        <GoogleIcon
          className="material-symbols-outlined m-auto flex size-16 flex-col items-center justify-center rounded-full border text-4xl"
          label="neurology"
        />
      </PageFull>
    </>
  )
}
