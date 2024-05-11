import GoogleIcon from '../utilities/GoogleIcon'
import Icon from '../utilities/Icon'
import { icons } from '../assets/images'

export default function Category() {
  return (
    <>
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-x-2">
          <p className="w-32 rounded-sm px-1 text-lg font-semibold">Category</p>
          <input
            type="text"
            className="w-full rounded-md border-none bg-lightBlue1 p-1 outline-none"
          />
          <GoogleIcon
            className="material-symbols-outlined text-2xl "
            label="add_reaction"
          />
          <Icon src={icons.smallMenuIcon} className="ml-auto size-7" />
        </div>
      </div>
    </>
  )
}
