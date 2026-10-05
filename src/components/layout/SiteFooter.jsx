import React from 'react'
import styles from './siteFooter.module.css'
import logo from '../../assets/logo.png'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.colLeft}>
          <div className={styles.headingContainer}>
            <div className={styles.headingBrand} style={{ paddingBottom: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', letterSpacing: '2px', fontFamily: '"Open Sans", sans-serif' }}>DREAMWAREZ</span>
            </div>
          </div>
          <p className={styles.text}>
            Dreamwarez solutions designed by experts, built with the future in mind. Our history makes us credible. Our work keeps us competitive. Our people are our strength.
          </p>
          <p className={styles.text}>
            Whether you need to minimize overhead, modernize your workloads, accelerate change, or scale your business—we have you covered.
          </p>
        </div>

        <div className={styles.colMiddle}>
          <div className={styles.quickLinksWrapper}>
            <div className={styles.quickLinksCol}>
              <div className={styles.headingContainer}>
                <h3 className={styles.heading}>Quick Links</h3>
              </div>
              <a className={styles.link} href="/">Home</a>
              <a className={styles.link} href="/about-us/">About Us</a>
              <a className={styles.link} href="/career-opportunities/">Career Opportunities</a>
              <a className={styles.link} href="/contact/">Contact Us</a>
              <a className={styles.link} href="/our-softwares/">Our Softwares</a>
              <a className={styles.link} href="/privacy-policy/">Privacy Policy</a>
              <a className={styles.link} href="/services/">Services</a>
            </div>
            <div className={styles.quickLinksCol}>
              <div className={styles.headingContainer}>
                <h3 className={styles.heading}>Policies</h3>
              </div>
              <a className={styles.link} href="/terms/">Terms and condition</a>
              <a className={styles.link} href="/refund-policy/">Refund Policy</a>
              <a className={styles.link} href="/cancellation-policy/">Cancellation Policy</a>
            </div>
          </div>
        </div>

        <div className={styles.colRight}>
          <div className={styles.headingContainer}>
            <h3 className={styles.heading}>Let's Connect!</h3>
          </div>
          <p className={styles.text}>
            Connect with us, concentrate on high-value tasks that truly make an impact.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/dreamwarez.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                <path d="M15 12h-2v8h-3v-8H8v-3h2V6.5C10 4.5 11.1 3 13.8 3h2.2v3h-1.6c-1 0-1.4.6-1.4 1.4V9h3l-1 3z" fill="#ffffff"/>
              </svg>
            </a>
            <a
              href="https://x.com/Dreamwarez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="X (Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#000000"/>
                <path d="M13.6 10.4L19.2 4h-1.3l-4.8 5.5-3.8-5.5H4l5.8 8.4L4 19h1.3l5.1-5.8 4.1 5.8h5.3l-6.2-8.6zm-1.8 2.1l-.6-.8-4.7-6.7H8l3.8 5.4.6.8 5 7.1h-1.5l-4.1-5.8z" fill="#ffffff"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@dreamwarezsoftware6102"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#FF0000"/>
                <path d="M16.5 7H7.5C6.1 7 5 8.1 5 9.5v5c0 1.4 1.1 2.5 2.5 2.5h9c1.4 0 2.5-1.1 2.5-2.5v-5C19 8.1 17.9 7 16.5 7z" fill="#ffffff"/>
                <path d="M10.5 14l4.5-2.5-4.5-2.5v5z" fill="#FF0000"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/dreamwarez/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
                <path d="M8 9H5v10h3V9zm-1.5-1.5c-1 0-1.5-.6-1.5-1.4s.5-1.4 1.5-1.4 1.5.6 1.5 1.4-.5 1.4-1.5 1.4zM20 19h-3v-5.2c0-1.3-.5-2.2-1.6-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.6-.1 1V19h-3s.1-9.1 0-10h3v1.4c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19z" fill="#ffffff"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBorder} />

      <div className={styles.bottom}>
        <span>Copyright © 2026 <span className={styles.companyName}>Dreamwarez - The Simplified Software Company</span></span>
      </div>
    </footer>
  )
}
