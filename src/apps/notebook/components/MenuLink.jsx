// import global utilities
import Icon from '../../globals/utilities/Icon'

export default function MenuLink ({menuIcon, textLabel}) {
    return (
      <>
        <p className="flex items-center gap-x-3 font-semibold">
          <Icon src={menuIcon} className="size-5" /> {textLabel}
        </p>
      </>
    )
}