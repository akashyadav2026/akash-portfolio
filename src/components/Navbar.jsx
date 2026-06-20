import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import './Navbar.css'

const navItems = [
  { label: 'Home',       to: 'home'       },
  { label: 'About',      to: 'about'      },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills',     to: 'skills'     },
  { label: 'Projects',   to: 'projects'   },
  { label: 'Contact',    to: 'contact'    },
]

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar__container">
          {/* Logo */}
          <a href="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <div className="navbar__logo-mark">AY</div>
            <span className="navbar__logo-text">Akash<span className="gradient-text">.</span></span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  spy
                  offset={-80}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`navbar__link ${activeSection === item.to ? 'navbar__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>


          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <div className="mobile-menu__header">
                <a href="/" className="mobile-menu__logo-wrap">
                  <div className="navbar__logo-mark">AY</div>
                  <span className="navbar__logo-text">Akash<span className="gradient-text">.</span></span>
                </a>
                <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
                  <HiX size={18} />
                </button>
              </div>

              <ul className="mobile-menu__links">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      to={item.to}
                      smooth
                      duration={600}
                      offset={-80}
                      className="mobile-menu__link"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="mobile-menu__num">0{i + 1}.</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <a
                href="/resource/Akash_Yadav_Resume.pdf"
                download
                className="btn-primary mobile-menu__cta"
                onClick={() => setMenuOpen(false)}
              >
                <FiDownload size={15} /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
