import GoogleIcon from '../utilities/GoogleIcon'

export default function NavBarCenter({googleLabel, textLabel}) {
  return (
    <>
      <div className="relative flex w-full items-center justify-center">
        <GoogleIcon className="material-symbols-outlined absolute left-0 text-2xl" label={googleLabel}/>
        <h1 className="text-xl font-bold ">{textLabel}</h1>
      </div>
    </>
  )
}
