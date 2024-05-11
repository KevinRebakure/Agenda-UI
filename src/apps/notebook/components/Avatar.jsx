import { images } from '../../globals/assets/images'

export default function Avatar({ page }) {
  if (page === 'profile') {
    return <BigAvatar />
  } else if (page === 'menu') {
    return <SmallAvatar />
  } else {
    return <p className='text-2xl'>Failed to make a call😥</p>
  }
}

function BigAvatar() {
  return (
    <>
      <div className="space-y-2">
        <div className="m-auto size-36 rounded-full border-2 border-mainBlue p-0.1">
          <img
            src={images.avatar}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <p className="text-center text-lg font-bold">Rebakure Kevin</p>
      </div>
    </>
  )
}

function SmallAvatar() {
  return (
    <>
      <div className="flex gap-x-4">
        <div className="size-14 self-center rounded-full border border-mainBlue p-0.1">
          <img
            src={images.avatar}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-semibold">Rebakure Kevin</p>
          <p className="text-sm">Personal</p>
        </div>
      </div>
    </>
  )
}
