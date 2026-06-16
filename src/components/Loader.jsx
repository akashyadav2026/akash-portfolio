import './Loader.css'

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader-bg" />
    <div className="loader-mesh" />

    <div className="loader-content">
      {/* Rings */}
      <div className="loader-ring-outer">
        <div className="loader-ring-middle">
          <div className="loader-ring-inner">
            <span className="loader-initials">AY</span>
          </div>
        </div>
      </div>

      {/* Orbiting dot */}
      <div className="loader-orbit">
        <div className="loader-orbit-dot" />
      </div>

      {/* Name */}
      <div className="loader-text">
        <h2 className="loader-name">Akash Yadav</h2>
        <p className="loader-role">Backend Developer</p>
      </div>

      {/* Progress */}
      <div className="loader-progress-track">
        <div className="loader-progress-fill" />
      </div>

      {/* Tech pills */}
      <div className="loader-pills">
        {['Java', 'Spring Boot', 'REST API', 'MySQL'].map((tech, i) => (
          <span key={tech} className="loader-pill" style={{ animationDelay: `${i * 0.18}s` }}>
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Corner decorations */}
    <div className="corner-tl" />
    <div className="corner-br" />
  </div>
)

export default Loader
