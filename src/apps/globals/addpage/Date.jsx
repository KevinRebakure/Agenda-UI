import EnterTime from '../utilities/EnterTime'

export default function Date() {
  return (
    <>
      <div className="space-y-1">
        <p className="w-32 rounded-sm px-1 text-lg font-semibold">Date</p>
        <div className="space-y-2">
          <input
            type="date"
            className="w-full rounded-md border-none bg-lightBlue1 p-1 outline-none"
          />
          <EnterTime label="Start" />
          <EnterTime label="End" />
        </div>
      </div>
    </>
  )
}
