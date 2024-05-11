// import global components
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageFull from '../../globals/components/PageFull'
// import local components
import Avatar from '../components/Avatar'
import Setting from '../components/Setting'
// import local assets

export default function Profile() {
  const settings = [
    {
      firstIcon: 'edit',
      text: 'Edit your profile',
      // lastIcon: 'person',
    },
    {
      firstIcon: 'location_on',
      text: 'Turn off location',
      lastIcon: 'toggle_on',
    },
    {
      firstIcon: 'contrast',
      text: 'Turn on Dark Mode',
      lastIcon: 'toggle_off',
    },
    {
      firstIcon: 'cloud',
      text: 'Receive daily quotes and weather updates',
      lastIcon: 'toggle_on',
    },
    {
      firstIcon: 'neurology',
      text: 'Turn on AI',
      lastIcon: 'toggle_off',
    },
    {
      firstIcon: 'account_circle',
      text: 'Switch accounts',
      lastIcon: 'sync',
    },
  ]

  return (
    <>
      <PageFull>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Profile" />
        <div className="space-y-5 overflow-y-scroll">
          <Avatar page={'profile'} />

          <div className="space-y-1">
            {settings.map((setting, index) => {
              const { firstIcon, text, lastIcon } = setting
              return (
                <Setting
                  key={index}
                  icon1={firstIcon}
                  textLabel={text}
                  icon2={lastIcon}
                />
              )
            })}
          </div>
        </div>
      </PageFull>
    </>
  )
}
