In this project, I have built a **CCBP Timeline App** by applying the concepts I have learned till now.

### Refer to the image below for Output:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-output.gif" alt="ccbp timeline output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Completed Following Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app has the following functionalities

- Timeline items are displayed using **react-chrono** with custom rendering based on the `categoryId`.
- If the `categoryId` is `COURSE`, a **CourseTimelineCard** is rendered with:
  - A clock icon (`AiFillClockCircle`) for the duration.
  - Course title, description, and tags.
- If the `categoryId` is `PROJECT`, a **ProjectTimelineCard** is rendered with:
  - A calendar icon (`AiFillCalendar`) for the duration.
  - Project title, description, and an image.
  - A **Visit** link that navigates to the respective project URL when clicked.

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Used these files to complete the implementation:

- `src/components/TimelineView/index.js`
- `src/components/TimelineView/index.css`
- `src/components/CourseTimelineCard/index.js`
- `src/components/CourseTimelineCard/index.css`
- `src/components/ProjectTimelineCard/index.js`
- `src/components/ProjectTimelineCard/index.css`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

- Used `react-chrono` to render timeline with the `items` prop.
- Rendered `CourseTimelineCard` when `categoryId` is `COURSE`.
- Rendered `ProjectTimelineCard` when `categoryId` is `PROJECT`.
- Used icons:
  - `AiFillClockCircle` for course duration.
  - `AiFillCalendar` for project duration.
- The timeline title is displayed beside each card using the `items` prop in the `Chrono` component.

</details>

### Resources Used

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>
<div style="background-color: #2b237c; width: 150px; padding: 10px; color: white">Hex: #2b237c</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

### Conclusion

- 📚 This project showcases how to effectively use **react-chrono** to display course and project timelines with custom card components, responsive layout, and icons.
- Thanks for checking out my CCBP Timeline App! It demonstrates skills in component-based architecture, dynamic rendering, and conditional logic in React.

- 🔗 Check it out here: [https://ccbpTimeline.ccbp.tech]

Happy coding! 🚀
