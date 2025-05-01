import {Component} from 'react'
import {Chrono} from 'react-chrono'
import './index.css'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="timeline-view-container">
        <div className="headings-container">
          <h1 className="heading">
            MY JOURNEY OF
            <br />
            <span className="ccbp">CCBP 4.0</span>
          </h1>
        </div>
        <div className="chrono-container">
          <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: '#0967d2',
              secondary: '#ffffff',
              titleColor: '#0967d2',
            }}
          >
            {timelineItemsList.map(eachItem =>
              eachItem.categoryId === 'COURSE' ? (
                <CourseTimelineCard
                  key={eachItem.id}
                  courseCardDetails={eachItem}
                />
              ) : (
                <ProjectTimelineCard
                  key={eachItem.id}
                  projectCardDetails={eachItem}
                />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
