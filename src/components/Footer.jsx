import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const socials = [
  { icon: <FiGithub size={16} />, href: 'https://github.com/akashyadav2026', label: 'GitHub', id: 'footer-github' },
  { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/akashydv26/', label: 'LinkedIn', id: 'footer-linkedin' },
  { icon: <FiMail size={16} />, href: 'mailto:akashydv2026@gmail.com', label: 'Email', id: 'footer-email' },
]


const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      {/* Brand */}
      <div className="footer__brand">
        <Link to="home" smooth duration={600} className="footer__logo">
          <div className="footer__logo-mark">AY</div>
          <span className="footer__logo-text">Akash<span className="gradient-text">.</span></span>
        </Link>
        <p className="footer__tagline text-2">
          Building scalable backends,<br />one API at a time.
        </p>
        <div className="footer__socials">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={s.label}
              id={s.id}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="footer__col-title">Navigation</h4>
        <ul className="footer__nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} smooth duration={600} offset={-80} className="footer__nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="footer__col-title">Contact</h4>
        <div className="footer__contact-links">
          <a href="mailto:akashydv2026@gmail.com" className="footer__contact-link">
            <FiMail size={14} /> akashydv2026@gmail.com
          </a>
          <a href="https://github.com/akashyadav26" target="_blank" rel="noopener noreferrer" className="footer__contact-link">
            <FiGithub size={14} /> github.com/akashyadav26
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="footer__bottom">
      <p className="footer__copy">
        © {new Date().getFullYear()} Akash Yadav. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
