export default function PageFull({ children, bg, color }) {
  let background = bg != '' ? bg : 'bg-mainwhite'
  let text = color != '' ? color : 'mainwhite'

  return (
    <>
      <div className={`text-${text} pageDetail w-pixel4aWidth h-pixel4aHeight m-auto flex flex-col items-stretch gap-y-6 rounded-xl ${background} p-4 shadow-2xl`}>
        {children}
      </div>
    </>
  )
}
