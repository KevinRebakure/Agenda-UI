import Welcome from './pages/Welcome'
import ToDoHome from './pages/ToDoHome'
import ToDoHomeExpanded from './pages/ToDoHomeExpanded'
import TaskDetail from './pages/TaskDetail'
import NoteDetail from './pages/NoteDetail'
import NoteHome from './pages/NoteHome'
import AddTask from './pages/AddTask'
import AddNote from './pages/AddNote'
import Daily from './pages/Daily'
import Profile from './pages/Profile'
import Menu from './pages/Menu'

export default function Notebook() {
  return (
    <>
      <Welcome />
      <ToDoHome />
      <ToDoHomeExpanded />
      <TaskDetail />
      <NoteHome />
      <NoteDetail />
      <AddTask />
      <AddNote />
      <Daily />
      <Profile />
      <Menu />
    </>
  )
}
