// import global components
import NavBarCenter from '../globals/components/NavBarCenter'
import PageFull from '../globals/components/PageFull'
// import global utilities
import GoogleIcon from '../globals/utilities/GoogleIcon'
// import local components
import Display from './components/Display'
import Keys from './components/Keys'

export default function Calculator() {
  return (
    <>
      <PageFull>
        <NavBarCenter
          googleLabel="keyboard_arrow_left"
          textLabel="Calculator"
        />

        <Display />

        <div className="grid grid-cols-4 text-center text-xl">
          <Keys label="C" />
          <Keys label="+/-" />
          <Keys label="%" />
          <Keys label="/" />
          <Keys label={7} />
          <Keys label={8} />
          <Keys label={9} />
          <Keys label="*" />
          <Keys label={4} />
          <Keys label={5} />
          <Keys label={6} />
          <Keys label="-" />
          <Keys label={1} />
          <Keys label={2} />
          <Keys label={3} />
          <Keys label="+" />
          <Keys label={<GoogleIcon label="neurology" />} />
          <Keys label={0} />
          <Keys label="." />
          <Keys label="=" />
        </div>
      </PageFull>
    </>
  )
}
