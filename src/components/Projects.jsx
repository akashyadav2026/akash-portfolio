import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'Spring Boot REST API',
    desc: 'A full-featured RESTful API backend with JWT authentication, CRUD operations, pagination, and MySQL. Follows clean architecture principles with proper DTO patterns.',
    image: null,
    placeholderColor: 'green',
    snippet: { key: '"stack"', val: '"Spring Boot, MySQL"', status: '"deployed"' },
    chips: [
      { label: 'Java',       color: 'orange' },
      { label: 'Spring Boot',color: ''       },
      { label: 'MySQL',      color: 'sky'    },
      { label: 'JWT',        color: 'violet' },
      { label: 'REST API',   color: ''       },
    ],
    github: 'https://github.com/akashyadav2026?tab=repositories',
    featured: true,
  },
  {
    title: 'Amazon Clone',
    desc: 'Full-stack Amazon clone with product listing, shopping cart management, and responsive checkout flow. Works seamlessly on all screen sizes.',
    image: null,
    placeholderColor: 'sky',
    snippet: { key: '"app"', val: '"amazon-clone"', status: '"200 OK"' },
    chips: [
      { label: 'HTML', color: 'orange' },
      { label: 'CSS',  color: 'sky'    },
      { label: 'JS',   color: ''       },
    ],
    github: 'https://github.com/akashyadav2026?tab=repositories',
    featured: false,
  },
  {
    title: 'Netflix Clone',
    desc: 'Pixel-perfect Netflix UI clone with movie categories, hero banner, and hover effects.',
    image: null,
    placeholderColor: 'violet',
    snippet: { key: '"app"', val: '"netflix-clone"', status: '"responsive UI"' },
    chips: [
      { label: 'HTML', color: 'orange' },
      { label: 'CSS',  color: 'sky'    },
      { label: 'JS',   color: ''       },
    ],
    github: 'https://github.com/akashyadav2026?tab=repositories',
    featured: false,
  },
  {
    title: 'Real-time Chat App',
    desc: 'Real-time chat application with WebSocket integration, multiple users, message history, and online status indicators. Full Java backend with a lightweight frontend.',
    image: null,
    placeholderColor: 'green',
    snippet: { key: '"feature"', val: '"web-sockets"', status: '"real-time"' },
    chips: [
      { label: 'Java',      color: 'orange' },
      { label: 'WebSocket', color: 'violet' },
      { label: 'HTML/CSS',  color: ''       },
    ],
    github: 'https://github.com/akashyadav2026?tab=repositories',
    featured: false,
  },
  {
    title: 'Number Guess Game',
    desc: 'Interactive browser-based guessing game with score tracking, difficulty levels, and smooth animations.',
    image: null,
    placeholderColor: 'orange',
    snippet: { key: '"game"', val: '"number-guesser"', status: '"interactive"' },
    chips: [
      { label: 'HTML', color: 'orange' },
      { label: 'CSS',  color: 'sky'    },
      { label: 'JS',   color: ''       },
    ],
    github: 'https://github.com/akashyadav2026?tab=repositories',
    featured: false,
  },
]

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false)
  const snippet = project.snippet

  return (
    <motion.div
      className={`bento project-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Media */}
      <div className="project-card__media">
        <div className={`project-card__placeholder project-card__placeholder--${project.placeholderColor}`}>
          <pre style={{ color: 'var(--text-2)', userSelect: 'none', fontSize: '0.8rem', lineHeight: '2' }}>
            <span className="code-key">{snippet.key}</span>: <span className="code-val">{snippet.val}</span>,{'\n'}
            <span className="code-key">"status"</span>: <span className="code-val">{snippet.status}</span>
          </pre>
        </div>

        {project.featured && (
          <div className="project-card__badge">⭐ Featured</div>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="project-card__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__overlay-btn"
              >
                <FiGithub size={16} /> View Code
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__chips">
          {project.chips.map((c) => (
            <span key={c.label} className={`chip ${c.color}`}>{c.label}</span>
          ))}
        </div>

        <div className="project-card__footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            id={`proj-github-${project.title.toLowerCase().replace(/[\s—]/g, '-')}`}
          >
            <FiGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <div className="projects" ref={ref}>
      <motion.div
        className="projects__header"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <span className="section-tag">Browse My Work</span>
        <h2 className="section-title">Recent <span className="gradient-text">Projects</span></h2>
        <p className="projects__subtitle text-2">
          Production-grade projects and personal builds showcasing my backend skills.
        </p>
      </motion.div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} inView={inView} />
        ))}
      </div>

      <motion.div
        className="projects__cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.55 }}
      >
        <a
          href="https://github.com/akashyadav2026?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          id="view-all-github"
        >
          <FiGithub size={16} /> View All on GitHub
        </a>
      </motion.div>
    </div>
  )
}

export default Projects
