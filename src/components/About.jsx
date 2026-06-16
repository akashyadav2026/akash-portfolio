import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import aboutImg from '../assets/akash-about.png'
import './About.css'

const stats = [
  { value: 1,   suffix: '+ yr',  label: 'Experience'    },
  { value: 3,   suffix: '+',     label: 'Live Projects'  },
  { value: 70,  suffix: '+',     label: 'Users Served'   },
  { value: 100, suffix: '%',     label: 'Dedication'     },
]

const infoRows = [
  { icon: '🏢', label: 'Company',   val: 'Smart Sight Innovations, Mumbai' },
  { icon: '💼', label: 'Role',      val: 'Java Backend Developer'          },
  { icon: '🎓', label: 'Education', val: 'B.Sc. IT — Mumbai University'    },
  { icon: '📍', label: 'Location',  val: 'Mumbai, India'                   },
  { icon: '📧', label: 'Email',     val: 'akashydv2026@gmail.com'          },
]

const techStack = [
  { name: 'Java',              color: 'orange' },
  { name: 'Spring Boot',       color: ''       },
  { name: 'Spring MVC',        color: ''       },
  { name: 'Spring Security',   color: 'violet' },
  { name: 'Hibernate / JPA',   color: ''       },
  { name: 'REST APIs',         color: ''       },
  { name: 'Microservices',     color: 'violet' },
  { name: 'MySQL',             color: 'sky'    },
  { name: 'PostgreSQL',        color: 'sky'    },
  { name: 'AWS S3',            color: 'orange' },
  { name: 'Elastic Beanstalk', color: 'orange' },
  { name: 'JWT Auth',          color: 'violet' },
  { name: 'Thymeleaf',         color: ''       },
  { name: 'Maven',             color: ''       },
  { name: 'Postman',           color: ''       },
  { name: 'GitHub',            color: ''       },
  { name: 'JavaScript',        color: 'orange' },
  { name: 'Node.js',           color: 'green'  },
  { name: 'HTML / CSS',        color: 'sky'    },
  { name: 'n8n workflow',      color: 'violet' },
]

const About = () => {
  const [ref, inView]   = useInView({ triggerOnce: true, threshold: 0.06 })
  const [sRef, sInView] = useInView({ triggerOnce: true, threshold: 0.2  })

  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
  }
  const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="about" ref={ref}>
      {/* Header */}
      <motion.div
        className="about__header"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <span className="section-tag">Get To Know Me</span>
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        className="about__bento"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
      >
        {/* ── BIO ── */}
        <motion.div className="bento about__card-bio" variants={fadeUp}>
          <div className="about__bio-tag">
            <span className="about__bio-tag-dot" />
            Currently at Smart Sight Innovations
          </div>

          <h3 className="about__bio-name">
            Hi, I'm <span className="gradient-text">Akash Yadav</span>
          </h3>

          <p className="about__bio-text">
            Java Backend Developer with <strong>1+ years of production experience</strong> building
            and deploying REST APIs using Spring Boot, Spring Security, and Hibernate/JPA.
            I've contributed to end-to-end delivery of a <strong>multi-client SaaS product (FDMS)</strong> serving
            funeral service industries, and built a full-featured <strong>EcoKranti CRM</strong> covering
            the complete business lifecycle. Comfortable with <strong>AWS deployments</strong> (Elastic
            Beanstalk, RDS, S3) and Agile workflows.
          </p>

          <div className="about__bio-cta">
            <a href="/resource/AKASHYADAVResume.pdf" download className="btn-primary">
              Download Resume
            </a>
            <a
              href="https://github.com/akashyadav2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* ── STATS ── */}
        <motion.div className="bento about__card-stats" ref={sRef} variants={fadeUp}>
          {stats.map((s, i) => (
            <div key={s.label} className="about__stat-item">
              <div className="about__stat-val">
                {sInView && (
                  <CountUp start={0} end={s.value} duration={2} delay={i * 0.15} />
                )}
                <span>{s.suffix}</span>
              </div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── PHOTO + QUICK INFO ── */}
        <motion.div className="bento about__card-photo-info" variants={fadeUp}>
          {/* Photo */}
          <div className="about__photo-half">
            <img
              src={aboutImg}
              alt="Akash Yadav at work"
              className="about__side-img"
            />
          </div>

          {/* Info */}
          <div className="about__info-half">
            <div className="about__info-title">Quick Info</div>
            {infoRows.map((row) => (
              <div key={row.label} className="about__info-row">
                <div className="about__info-icon">{row.icon}</div>
                <div className="about__info-text">
                  <div className="about__info-label">{row.label}</div>
                  <div className="about__info-val">{row.val}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── TECH STACK ── */}
        <motion.div className="bento about__card-tech" variants={fadeUp}>
          <div className="about__tech-title">Tech Stack</div>
          <div className="about__chip-grid">
            {techStack.map((t) => (
              <span key={t.name} className={`chip ${t.color}`}>
                {t.name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
