// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'

export default function Subtask({ label, completed }) {
  return (
    <>
      <p className="flex items-center gap-x-1">
        <GoogleIcon
          className="material-symbols-outlined text-lg"
          label="fiber_manual_record"
        />
        {label}
        <GoogleIcon
          className="material-symbols-outlined ml-auto text-2xl"
          label={completed ? 'check' : 'more_horiz'}
        />
      </p>
    </>
  )
}
