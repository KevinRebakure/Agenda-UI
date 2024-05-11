// import global utility
import GoogleIcon from '../../globals/utilities/GoogleIcon'

export default function Setting({ icon1, textLabel, icon2 }) {
  return (
    <>
      <p className="flex items-center gap-x-3 font-semibold">
        <GoogleIcon className="text-3xl" label={icon1} />
        {textLabel}
        <GoogleIcon className="ml-auto text-3xl" label={icon2} />
      </p>
    </>
  )
}
