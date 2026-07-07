// this file act like a reusable project section wrapper, so each project can be rendered in its own section.

const BeginnerProjectsWrapper = ({ title, children, description }) => {
  return (
    <div className="project-section">
      {/* Project Title */}
      {title && <h3 className="project-title">{title}</h3>}
      
      {/* Project Description (optional) */}
      {description && <p className="project-description">{description}</p>}
      
      {/* Project Content/Component */}
      <div className="project-content">
        {children}
      </div>
    </div>
  )
}

export default BeginnerProjectsWrapper