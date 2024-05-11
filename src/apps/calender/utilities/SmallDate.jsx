export default function SmallDate({ month, date }) {
  return (
    <>
      <div className="h-min w-12 rounded-md border p-1">
        <p className="text-center text-xl font-semibold">{month}</p>
        <p className="text-center text-sm">{date}</p>
      </div>
    </>
  )
}
