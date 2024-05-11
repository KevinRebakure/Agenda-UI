// import global components
import NavBarBetween from '../../globals/components/NavBarBetween'
import PageFull from '../../globals/components/PageFull'
// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
// import local components
import ProgressBar from '../components/Progress'
import Subtask from '../components/Subtask'
// import local utilities
import CategoryLabel from '../utilities/CategoryLabel'

export default function TaskDetail() {
  return (
    <>
      <PageFull>
        <NavBarBetween>
          <GoogleIcon
            className="material-symbols-outlined text-2xl"
            label="keyboard_arrow_left"
          />

          <h1 className="text-xl font-bold ">Details</h1>

          <GoogleIcon
            className="material-symbols-outlined text-2xl"
            label="edit"
          />
        </NavBarBetween>

        <div className="space-y-3 overflow-y-scroll">
          <div className="space-y-2 ">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Play guitar</h1>
              <CategoryLabel label="music" />
            </div>
            <ProgressBar />
          </div>

          <div className="space-y-1 ">
            <h1 className="text-xl font-bold">Subtasks</h1>
            <Subtask label="I believe in you Don Williams" completed={true} />
            <Subtask label="Perfect Ed Sheeran" completed={true} />
            <Subtask label="Dm7 chord" completed={true} />
            <Subtask label="Vocal practices" completed={false} />
          </div>

          <div>
            <h1 className="text-xl font-bold">Description</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              repellat tenetur ipsam et id accusantium illo, error harum nulla
              debitis odio impedit dolorum esse quisquam quam magnam, in non
              incidunt? Qui et labore, unde quis dolore nihil id eligendi
              distinctio, sapiente impedit aliquam asperiores illum esse dolorem
              commodi deserunt?
            </p>
          </div>
        </div>
      </PageFull>
    </>
  )
}
