// import local utilities
import CategoryLabel from '../utilities/CategoryLabel'

export default function Text({ color, title, label }) {
  return (
    <>
      <div className={`${color} space-y-1 rounded-md p-2`}>
        <h1 className="text-lg font-bold">{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="flex items-center justify-between">
          <CategoryLabel label={label} />
          <p className="text-right text-sm">
            March 1<sup>st</sup>, 2024
          </p>
        </div>
      </div>
    </>
  )
}
