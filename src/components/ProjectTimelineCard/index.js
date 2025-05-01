import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectCardDetails} = props
  const {description, duration, imageUrl, projectUrl, projectTitle} =
    projectCardDetails
  return (
    <div className="projectTimeline-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calendar-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
