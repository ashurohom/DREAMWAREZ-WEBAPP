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
            {/* LinkedIn */}
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

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dreamwarez/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="footerInstaGrad" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <circle cx="12" cy="12" r="12" fill="url(#footerInstaGrad)" />
                <path d="M12 6.5c1.79 0 2 .01 2.71.04.65.03 1.01.14 1.25.23.31.12.54.27.77.5.23.23.38.46.5.77.09.24.2.6.23 1.25.03.71.04.92.04 2.71s-.01 2-.04 2.71c-.03.65-.14 1.01-.23 1.25-.12.31-.27.54-.5.77-.23.23-.46.38-.77.5-.24.09-.6.2-1.25.23-.71.03-.92.04-2.71.04s-2-.01-2.71-.04c-.65-.03-1.01-.14-1.25-.23-.31-.12-.54-.27-.77-.5-.23-.23-.38-.46-.5-.77-.09-.24-.2-.6-.23-1.25C6.51 14 6.5 13.79 6.5 12s.01-2 .04-2.71c.03-.65.14-1.01.23-1.25.12-.31.27-.54.5-.77.23-.23.46-.38.77-.5.24-.09.6-.2 1.25-.23.71-.03.92-.04 2.71-.04M12 5c-1.82 0-2.05.01-2.76.04-.72.03-1.21.15-1.64.32-.45.17-.83.41-1.21.79-.38.38-.62.76-.79 1.21-.17.43-.29.92-.32 1.64C5.01 9.95 5 10.18 5 12s.01 2.05.04 2.76c.03.72.15 1.21.32 1.64.17.45.41.83.79 1.21.38.38.76.62 1.21.79.43.17.92.29 1.64.32.71.03.94.04 2.76.04s2.05-.01 2.76-.04c.72-.03 1.21-.15 1.64-.32.45-.17.83-.41 1.21-.79.38-.38.62-.76.79-1.21.17-.43.29-.92.32-1.64.03-.71.04-.94.04-2.76s-.01-2.05-.04-2.76c-.03-.72-.15-1.21-.32-1.64-.17-.45-.41-.83-.79-1.21-.38-.38-.76-.62-1.21-.79-.43-.17-.92-.29-1.64-.32C14.05 5.01 13.82 5 12 5zm0 3.4A3.6 3.6 0 1 0 15.6 12 3.6 3.6 0 0 0 12 8.4zm0 5.92A2.32 2.32 0 1 1 14.32 12 2.32 2.32 0 0 1 12 14.32zm4.58-6.06a.84.84 0 1 1-.84-.84.84.84 0 0 1 .84.84z" fill="#ffffff" />
              </svg>
            </a>

            {/* YouTube */}
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

            {/* Facebook */}
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
