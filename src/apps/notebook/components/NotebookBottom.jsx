// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
import Icon from '../../globals/utilities/Icon'
// import global assets
import { icons } from '../../globals/assets/images'

export default function NotebookBottom() {
  return (
    <>
      <div className="z-1 absolute bottom-0 flex w-full items-center justify-evenly rounded-b-xl bg-mainwhite py-2">
        <GoogleIcon className=" text-4xl text-mainBlue" label="home" />
        <GoogleIcon className=" text-4xl" label="neurology" />
        <Icon src={icons.plusIcon} className="h-10 w-10 " />
        <GoogleIcon className=" text-4xl" label="recommend" />
        <GoogleIcon className=" text-4xl" label="person" />
      </div>
    </>
  )
}
