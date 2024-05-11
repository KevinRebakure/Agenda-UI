// import global components
import Category from '../../globals/addpage/Category'
import Description from '../../globals/addpage/Description'
import SubTasks from '../../globals/addpage/SubTasks'
import Submit from '../../globals/addpage/Submit'
import Title from '../../globals/addpage/Title'
import Date from '../../globals/addpage/Date'
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageFull from '../../globals/components/PageFull'

export default function AddDay() {
  return (
    <>
      <PageFull>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Add day" />

        <div className="space-y-3 overflow-y-scroll">
          <Title />

          <Category />

          <Date />

          <SubTasks />

          <Description />
        </div>
        <Submit type="Set up the date" />
      </PageFull>
    </>
  )
}
