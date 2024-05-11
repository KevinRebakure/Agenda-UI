import Icon from '../../globals/utilities/Icon'

export default function EventTask({ icon, task, time }) {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Icon src={icon} className="size-8" />
        <p>{task}</p>
        <p className="ml-auto text-sm">{time}</p>
      </div>
    </>
  )
}
