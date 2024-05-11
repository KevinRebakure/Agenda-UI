// import local utilities
import QuickWeather from '../utilities/QuickWeather'
// import local components
import NotebookBottom from '../components/NotebookBottom'
import Quote from '../components/Quote'

// import global components
import NavBarBetween from '../../globals/components/NavBarBetween'
import PageCenter from '../../globals/components/PageCenter'
// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'

export default function Daily() {
  return (
    <>
      <PageCenter>
        <NavBarBetween>
          <div className="flex items-center space-x-6">
            <GoogleIcon className="text-4xl" label="menu" />
            <h1 className="text-xl font-bold ">Daily</h1>
          </div>
          <QuickWeather />
        </NavBarBetween>

        <div className="space-y-2 overflow-y-scroll">
          <h1 className="text-lg font-bold ">Quotes</h1>
          <Quote />
          <Quote />
          <Quote />
        </div>

        <NotebookBottom />
      </PageCenter>
    </>
  )
}
