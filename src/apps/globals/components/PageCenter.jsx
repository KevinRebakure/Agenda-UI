export default function PageCenter({ children, bg }) {
  return (
    <>
      <div
        className={`${bg} w-pixel4aWidth h-pixel4aHeight relative m-auto flex flex-col items-center gap-y-3 rounded-xl bg-mainwhite p-4 shadow-2xl`}
      >
        {children}
      </div>
    </>
  )
}
