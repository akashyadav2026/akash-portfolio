import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Experience.css'

const experience = [
  {
    dateRange: 'Apr 2025 – Present',
    company: 'Smart Sight Innovations',
    location: 'Mumbai, India',
    role: 'Java Backend Developer',
    projects: [
      {
        name: 'FDMS — Funeral Director Management System',
        chips: [
          { label: 'Spring MVC',      color: ''       },
          { label: 'Spring Security', color: 'violet' },
          { label: 'MySQL',           color: 'sky'    },
          { label: 'AWS S3',          color: 'orange' },
        ],
        bullets: [
          <>Designed and shipped an <strong>e-signature module</strong> now used by ~80% of all client accounts, eliminating wet signatures and cutting document turnaround by <strong>2–3 days per case</strong>.</>,
          <>Built an <strong>editable reports feature</strong> adopted by 50% of clients, reducing manual re-keying and cutting paperwork effort by <strong>~40%</strong> for those accounts.</>,
          <>Collaborated directly with <strong>US-based international clients</strong> in requirements gathering, translating business rules into API contracts and database schema changes.</>,
        ],
      },
      {
        name: 'EcoKranti CRM — Business Management System',
        chips: [
          { label: 'Spring Boot',     color: ''       },
          { label: 'Spring Security', color: 'violet' },
          { label: 'PostgreSQL',      color: 'sky'    },
          { label: 'AWS S3',          color: 'orange' },
        ],
        bullets: [
          <>Designed and built the backend for a <strong>full-featured CRM</strong> covering the complete business lifecycle — lead capture, multi-stage sales pipeline, quotation, invoicing, and last-mile delivery tracking.</>,
          <>Implemented <strong>granular RBAC with Spring Security</strong>, enforcing hierarchical data visibility where each role can only access leads, pipelines, and team data within their scope.</>,
          <>Designed PostgreSQL schemas with <strong>automated pipeline stage transitions</strong> and inventory lifecycle management — locking stock on order confirmation and auto-deducting on delivery completion.</>,
        ],
      },
      {
        name: 'Time Tracker — Internal Tool',
        chips: [
          { label: 'Spring Boot',     color: ''       },
          { label: 'Spring Security', color: 'violet' },
          { label: 'MySQL',           color: 'sky'    },
          { label: 'JWT Auth',        color: 'violet' },
          { label: 'AWS S3',          color: 'orange' },
        ],
        bullets: [
          <>Architected and built REST APIs from scratch to <strong>replace Redmine</strong> for daily/weekly time logging across <strong>~70 employees</strong>, cutting reporting overhead.</>,
          <>Implemented <strong>JWT-based authentication</strong> and role-based authorization (Admin / Developer / Manager / HR), securing access to sensitive reporting data.</>,
        ],
      },
    ],
  },
]

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })

  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
  }

  return (
    <div className="exp" ref={ref}>
      <motion.div
        className="exp__header"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <span className="section-tag">Where I've Worked</span>
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
      </motion.div>

      <div className="exp__timeline">
        {experience.map((job, ji) => (
          <motion.div
            key={ji}
            className="exp__item"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: ji * 0.1 }}
          >
            {/* Date */}
            <div className="exp__date">
              <div className="exp__date-range">{job.dateRange}</div>
              <div className="exp__date-company">{job.location}</div>
            </div>

            {/* Node */}
            <div className="exp__node">
              <div className="exp__dot" />
            </div>

            {/* Content */}
            <div className="exp__content">
              <div className="exp__role-header">
                <div className="exp__role-title">{job.role}</div>
                <div className="exp__role-company">
                  @ <span>{job.company}</span> — {job.location}
                </div>
              </div>

              {job.projects.map((proj, pi) => (
                <motion.div
                  key={pi}
                  className="exp__project"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + pi * 0.15 }}
                >
                  <div className="exp__project-name">
                    <span className="exp__project-title">📁 {proj.name}</span>
                  </div>

                  <div className="exp__project-chips">
                    {proj.chips.map((c) => (
                      <span key={c.label} className={`chip ${c.color}`}>{c.label}</span>
                    ))}
                  </div>

                  <ul className="exp__bullets">
                    {proj.bullets.map((b, bi) => (
                      <li key={bi} className="exp__bullet">{b}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        className="exp__edu"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="exp__edu-icon">🎓</span>
        <div className="exp__edu-body">
          <div className="exp__edu-degree">Bachelor of Science — Information Technology</div>
          <div className="exp__edu-school">Mumbai University</div>
          <div className="exp__edu-year">2021 – 2024</div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
