import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  FiMail, FiLinkedin, FiGithub, FiInstagram,
  FiSend, FiUser, FiMessageSquare
} from 'react-icons/fi'
import './Contact.css'

const EMAILJS_SERVICE_ID  = 'service_portfolio'
const EMAILJS_TEMPLATE_ID = 'template_contact'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const links = [
  {
    icon: <FiMail size={20} />,     label: 'Email',    val: 'akashydv2026@gmail.com',
    href: 'mailto:akashydv2026@gmail.com',
    color: 'green', id: 'contact-email',
  },
  {
    icon: <FiLinkedin size={20} />, label: 'LinkedIn', val: 'linkedin.com/in/akashydv26',
    href: 'https://www.linkedin.com/in/akashydv26/',
    color: 'sky', id: 'contact-linkedin',
  },
  {
    icon: <FiGithub size={20} />,   label: 'GitHub',   val: 'github.com/akashyadav2026',
    href: 'https://github.com/akashyadav2026',
    color: 'violet', id: 'contact-github',
  },
  {
    icon: <FiInstagram size={20} />,label: 'Phone',    val: '+91-9594897334',
    href: 'tel:+919594897334',
    color: 'orange', id: 'contact-phone',
  },
]


const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }
    setSending(true)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      toast.success("Message sent! I'll get back to you soon. 🚀")
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      const url = `mailto:akashydv2026@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
      window.open(url)
      toast.success('Opening your email client…')
    } finally {
      setSending(false)
    }
  }

  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }
  const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="contact" ref={ref}>
      <motion.div
        className="contact__header"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
        <p className="contact__subtitle text-2">
          I'm open to new opportunities, collaborations, or just a tech chat. Drop me a message!
        </p>
      </motion.div>

      <div className="contact__grid">
        {/* Left — Links */}
        <motion.div
          className="contact__info"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.h3 className="contact__info-heading" variants={fadeUp}>
            Let's connect
          </motion.h3>
          <motion.p className="contact__info-text text-2" variants={fadeUp}>
            Whether you have a project idea, want to collaborate, or just want to say hi —
            my inbox is always open.
          </motion.p>
          {links.map((l) => (
            <motion.a
              key={l.id}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="glass-card contact__link-card"
              id={l.id}
              variants={fadeUp}
            >
              <div className={`contact__link-icon contact__link-icon--${l.color}`}>
                {l.icon}
              </div>
              <div className="contact__link-info">
                <span className="contact__link-label">{l.label}</span>
                <span className="contact__link-val">{l.val}</span>
              </div>
              <span className="contact__link-arrow">→</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Right — Form */}
        <motion.div
          className="bento contact__form-wrap"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <h3 className="contact__form-title">Send a Message</h3>

          <form className="contact__form" ref={formRef} onSubmit={handleSubmit} id="contact-form">
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Your Name *</label>
                <div className="contact__input-wrap">
                  <FiUser className="contact__input-icon" size={15} />
                  <input
                    type="text" id="name" name="name"
                    placeholder="Akash Yadav"
                    className="contact__input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email Address *</label>
                <div className="contact__input-wrap">
                  <FiMail className="contact__input-icon" size={15} />
                  <input
                    type="email" id="email" name="email"
                    placeholder="your@email.com"
                    className="contact__input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <div className="contact__input-wrap">
                <input
                  type="text" id="subject" name="subject"
                  placeholder="Project collaboration, job opportunity…"
                  className="contact__input"
                  style={{ paddingLeft: '1rem' }}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message *</label>
              <div className="contact__input-wrap" style={{ alignItems: 'flex-start' }}>
                <FiMessageSquare className="contact__textarea-icon" size={15} />
                <textarea
                  id="message" name="message"
                  placeholder="Hi Akash, I'd love to…"
                  className="contact__textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary contact__submit"
              disabled={sending}
              id="contact-submit-btn"
            >
              {sending ? (
                <><div className="contact__spinner" /> Sending…</>
              ) : (
                <><FiSend size={16} /> Send Message</>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
