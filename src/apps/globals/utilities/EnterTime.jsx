export default function EnterTime({ label }) {
  return (
    <>
      <div className="flex gap-x-3">
        <p className="flex w-10 items-center">{label}</p>
        <input
          className="w-full rounded-md border-none bg-lightBlue1 p-1 outline-none"
          type="time"
          name=""
          id=""
        />
      </div>
    </>
  )
}
