'use client'

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc'
import Link from 'next/link'

import styles from '@/styles/AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Ofiare Khoko</h1>
              <p className={styles.role}>Software Engineer at Tessact</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Benin City, Nigeria
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/wilpowatech"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m I am a software developer with a strong foundation in Computer Science and
                a passion for building secure, scalable, and user-focused digital products. I
                specialize in modern web development using JavaScript and TypeScript, building
                applications with frameworks like React and Next.js.
              </p>

              <p className={styles.paragraph}>
                My work spans full-stack development, cybersecurity fundamentals, and cloud-based
                platforms. I enjoy transforming ideas into practical software solutions while
                maintaining clean code, performance, and strong security practices.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Present</span>
                </div>
                <h3 className={styles.expRole}>Software Engineer 2</h3>
                <p className={styles.expCompany}>Tessact</p>
                <ul className={styles.expList}>
                  <li>Leading frontend development with a lean team of 4 engineers</li>
                  <li>Building a next-gen video creation suite for professionals</li>
                  <li>Implemented collaborative video reviewing and editing features</li>
                  <li>Maintaining in-house component library, icon library and website</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Freelance</span>
                </div>
                <h3 className={styles.expRole}>Technical Writer</h3>
                <p className={styles.expDesc}>
                  Contributing to publications like <strong>100ms Blog</strong>,
                  <strong>LogRocket Blog</strong>, and <strong>DEV.to</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express</span>
                    <span className={styles.skillTag}>MongoDB</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications as a freelance
                technical author:
              </p>

              <div className={styles.writingLinks}>
                <a
                  href="https://www.100ms.live/blog/author/nitin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>100ms Blog</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://blog.logrocket.com/author/nitinranganath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>LogRocket Blog</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://dev.to/itsnitinr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming and writing, I enjoy reading dystopian novels, listening to
                calm piano music, or just enjoying some downtime.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default AboutPage
