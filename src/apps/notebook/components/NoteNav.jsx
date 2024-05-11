// import local utilities
import TextButton from '../utilities/TextButton'
// import local assets
import { icons } from '../assets/images'
// import global utilities
import Icon from '../../globals/utilities/Icon'

export default function NoteNav() {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <TextButton active={true} label="ToDo" />
        <TextButton active={false} label="Completed" />
        <TextButton active={false} label="Uncompleted" />
        <Icon src={icons.smallMenuIcon} className="ml-auto h-8 w-8" />
      </div>
    </>
  )
}
