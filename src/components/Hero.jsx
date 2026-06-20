import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'
import profileImg from '../assets/akash-profile.png'
import './Hero.css'

const roles = [
  'Java Backend Developer',
  'Spring Boot Engineer',
  'REST API Architect',
]

const tickerItems = [
  'Java', '✦', 'Spring Boot', '✦', 'Spring Security', '✦',
  'REST APIs', '✦', 'AWS', '✦', 'MySQL', '✦', 'PostgreSQL', '✦', 'Microservices',
  '✦', 'Java', '✦', 'Spring Boot', '✦', 'Spring Security', '✦',
  'REST APIs', '✦', 'AWS', '✦', 'MySQL', '✦', 'PostgreSQL', '✦', 'Microservices',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting]   = useState(false)
  const [charIndex, setCharIndex]     = useState(0)

  useEffect(() => {
    const role = roles[currentRole]
    let t
    if (!isDeleting && charIndex < role.length) {
      t = setTimeout(() => { setDisplayText(role.slice(0, charIndex + 1)); setCharIndex(c => c + 1) }, 75)
    } else if (!isDeleting && charIndex === role.length) {
      t = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && charIndex > 0) {
      t = setTimeout(() => { setDisplayText(role.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }, 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentRole(r => (r + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [charIndex, isDeleting, currentRole])

  const cv = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  }
  const ci = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  }

  return (
    <div className="hero">
      <div className="hero__mesh" aria-hidden="true" />

      <div className="hero__inner">
        {/* LEFT — Text */}
        <motion.div className="hero__text" variants={cv} initial="hidden" animate="visible">
          <motion.div variants={ci} className="hero__badge">
            <span className="hero__badge-dot" />
            Open to New Opportunities
          </motion.div>

          <motion.h1 variants={ci} className="hero__name">
            Akash<br />
            <span className="gradient-text">Yadav</span>
          </motion.h1>

          <motion.div variants={ci} className="hero__role-row">
            <span>I'm a&nbsp;</span>
            <span className="hero__role-typed">
              {displayText}
              <span className="hero__cursor" />
            </span>
          </motion.div>

          <motion.p variants={ci} className="hero__bio">
            Java Backend Developer with <strong>1+ years of production experience</strong> building
            and deploying REST APIs using Spring Boot, Spring Security & Hibernate/JPA.
            Currently at <strong>Smart Sight Innovations, Mumbai</strong> — shipping features
            used by real clients across the US.
          </motion.p>

          <motion.div variants={ci} className="hero__chips">
            {['Java', 'Spring Boot', 'Spring Security', 'REST API', 'AWS', 'MySQL', 'PostgreSQL'].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </motion.div>

          <motion.div variants={ci} className="hero__btns">
            <a href="/resource/Akash_Yadav_Resume.pdf" download className="btn-primary" id="hero-download-cv">
              <FiDownload size={16} /> Download CV
            </a>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-outline" id="hero-contact-btn">
                <FiMail size={16} /> Contact Me
              </button>
            </Link>
          </motion.div>

          <motion.div variants={ci} className="hero__socials">
            {[
              { href: 'https://github.com/akashyadav2026',                   icon: <FiGithub size={18}/>,   id: 'hero-github',   label: 'GitHub'   },
              { href: 'https://www.linkedin.com/in/akashydv26/',             icon: <FiLinkedin size={18}/>, id: 'hero-linkedin', label: 'LinkedIn' },
              { href: 'mailto:akashydv2026@gmail.com',                       icon: <FiMail size={18}/>,    id: 'hero-email',    label: 'Email'    },
              { href: 'tel:+919594897334',                                   icon: <FiPhone size={18}/>,   id: 'hero-phone',    label: 'Phone'    },
            ].map((s) => (
              <a
                key={s.id}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="hero__social"
                id={s.id}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Image */}
        <motion.div
          className="hero__image-side"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
        >
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-border" />
            <div className="hero__avatar-frame">
              <img src={profileImg} alt="Akash Yadav — Java Backend Developer" className="hero__avatar-img" />
            </div>

            {/* Experience badge */}
            <motion.div
              className="hero__float-card hero__float-card--exp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="hero__float-icon">🚀</span>
              <div>
                <div className="hero__float-val">1+ Year</div>
                <div className="hero__float-label">Production Exp.</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="hero__ticker-wrap">
        <div className="hero__ticker">
          {tickerItems.map((item, i) => (
            <span key={i} className="hero__ticker-item">
              {item === '✦'
                ? <span className="hero__ticker-sep">✦</span>
                : item
              }
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Hero
