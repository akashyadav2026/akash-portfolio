import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Skills.css'

const categories = [
  {
    title: 'Core Backend',
    icon: '⚙️',
    color: 'green',
    skills: [
      { name: 'Java', level: 88, emoji: '☕' },
      { name: 'Spring Boot', level: 85, emoji: '🌱' },
      { name: 'Spring MVC', level: 80, emoji: '🏗️' },
      { name: 'Spring Security', level: 78, emoji: '🔒' },
      { name: 'Hibernate / JPA', level: 78, emoji: '🔗' },
      { name: 'REST API Design', level: 90, emoji: '🔌' },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'violet',
    skills: [
      { name: 'MySQL', level: 84, emoji: '🐬' },
      { name: 'PostgreSQL', level: 78, emoji: '🐘' },
      { name: 'Schema Design', level: 82, emoji: '🏛️' },
      { name: 'Query Optimisation', level: 76, emoji: '📊' },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: '☁️',
    color: 'orange',
    skills: [
      { name: 'AWS S3', level: 80, emoji: '🪣' },
      { name: 'Elastic Beanstalk', level: 72, emoji: '🌐' },
      { name: 'Git & GitHub', level: 85, emoji: '🐙' },
      { name: 'Postman', level: 88, emoji: '🚀' },
      { name: 'Maven', level: 78, emoji: '📦' },
      { name: 'Jira / Bitbucket', level: 75, emoji: '📋' },
    ],
  },
  {
    title: 'Web & Automation',
    icon: '🌐',
    color: 'sky',
    skills: [
      { name: 'JavaScript', level: 85, emoji: '⚡' },
      { name: 'Node.js', level: 75, emoji: '🟢' },
      { name: 'HTML / CSS', level: 85, emoji: '🎨' },
      { name: 'n8n Workflow', level: 80, emoji: '🔄' },
    ],
  },
]

const SkillBar = ({ name, level, emoji, inView, delay }) => (
  <div className="skill-item">
    <div className="skill-item__header">
      <span className="skill-item__name">
        <span className="skill-item__emoji">{emoji}</span>
        {name}
      </span>
      <span className="skill-item__pct">{level}%</span>
    </div>
    <div className="skill-item__track">
      <motion.div
        className="skill-item__fill"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.3, delay, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="skill-item__fill-glow"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.3, delay: delay + 0.1, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  </div>
)

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }

  return (
    <div className="skills" ref={ref}>
      <motion.div
        className="skills__header"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <span className="section-tag">What I Know</span>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="skills__subtitle text-2">
          1+ year of production backend development in the Java / Spring Boot ecosystem,
          with hands-on AWS cloud deployments and Agile team workflows.
        </p>
      </motion.div>

      <motion.div
        className="skills__grid"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
      >
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className={`bento skills__card skills__card--${cat.color}`}
            variants={fadeUp}
          >
            <div className="skills__card-header">
              <span className="skills__card-icon">{cat.icon}</span>
              <h3 className="skills__card-title">{cat.title}</h3>
            </div>
            <div className="skills__card-skills">
              {cat.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  {...s}
                  inView={inView}
                  delay={ci * 0.1 + si * 0.1}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
