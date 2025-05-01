import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const renderTagsList = tagItemProps => {
    const {id, name} = tagItemProps
    return (
      <li key={id} className="tag-item">
        <p className="tag">{name}</p>
      </li>
    )
  }

  const {courseCardDetails} = props
  const {courseTitle, description, duration, tagsList} = courseCardDetails
  return (
    <div className="courseTimeline-card">
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => renderTagsList(eachTag))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
