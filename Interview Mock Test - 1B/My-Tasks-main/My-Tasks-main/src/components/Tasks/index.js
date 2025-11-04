import {TaskName, TagsCategory, ListItem} from './styledComponents'

const Tasks = props => {
  const {eachTaskDetails} = props
  const {taskName, taskCategory} = eachTaskDetails

  return (
    <ListItem>
      <TaskName>{taskName}</TaskName>
      <TagsCategory>{taskCategory}</TagsCategory>
    </ListItem>
  )
}

export default Tasks
