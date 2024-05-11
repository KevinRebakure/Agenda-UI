// import global components
import Category from '../../globals/addpage/Category'
import Description from '../../globals/addpage/Description'
import Date from '../../globals/addpage/Date'
import SubTasks from '../../globals/addpage/SubTasks'
import Submit from '../../globals/addpage/Submit'
import Title from '../../globals/addpage/Title'
import NavBarCenter from '../../globals/components/NavBarCenter'
import PageFull from '../../globals/components/PageFull'

export default function AddTask() {
  return (
    <>
    <PageFull>
        <NavBarCenter googleLabel="keyboard_arrow_left" textLabel="Add task" />

        <div className="space-y-3 overflow-y-scroll">
          <Title type="Add task" />

          <Category />

          <Date />
          
          <SubTasks />

          <Description />
        </div>
        <Submit type="Create new task" />
    </PageFull>
    </>
  )
}
