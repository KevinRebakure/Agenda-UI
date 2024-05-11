export default function Table () {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const dates = () => {
      const d = []
      for (let i = 0; i < 31; i++) {
        d.push(i + 1)
      }
      return d
    }
    
    return (
      <>
        <div className="space-y-3 self-stretch">
          <h1 className="text-2xl font-semibold">March</h1>

          <div className="grid grid-cols-7">
            {days.map((day, index) => {
              return (
                <p key={index} className="text-center text-sm font-semibold">
                  {day}
                </p>
              )
            })}
          </div>

          <div className="grid grid-cols-7 gap-1 gap-y-3 text-center">
            {dates().map((date, index) => {
              return <p key={index}>{date}</p>
            })}
          </div>
        </div>
      </>
    )
}