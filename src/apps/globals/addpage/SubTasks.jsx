// import global utilites
import GoogleIcon from '../utilities/GoogleIcon'
import Subtask from '../utilities/Subtask'

export default function SubTasks() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <p className="w-32 rounded-sm px-1 text-lg font-semibold">Subtask</p>
          <input
            type="text"
            className="w-full rounded-md border-none bg-lightBlue1 p-1 outline-none"
          />
          <GoogleIcon label="add" />
        </div>
        <Subtask label="Subtask 1" completed={false} />
        <Subtask label="Subtask 2" completed={false} />
        <Subtask label="Subtask 3" completed={false} />
      </div>
    </>
  )
}
