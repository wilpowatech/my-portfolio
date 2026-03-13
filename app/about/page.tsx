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
              <p className={styles.role}>Software Engineer at Wilpowa</p>
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
                <h3 className={styles.expRole}>Lead Software Engineer </h3>
                <p className={styles.expCompany}>Wilpowa Tech Academy</p>
                <ul className={styles.expList}>
                  <li>
                    Founded and lead Wilpowa Tech Academy, empowering African students with
                    practical skills in web development, AI, and software engineering
                  </li>
                  <li>
                    Develop and maintain educational web platforms and applications using Next.js,
                    JavaScript/TypeScript, and modern frontend technologies
                  </li>
                  <li>
                    Mentor students in Linux, Git/GitHub workflows, and real-world software
                    development practices
                  </li>
                  <li>
                    Design structured learning programs and hands-on coding projects to prepare
                    students for careers in technology
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Web Developer</span>
                </div>
                <h3 className={styles.expRole}>M. A. Idaiye & Co.</h3>
                <ul className={styles.expList}>
                  <li>
                    Designed and developed the firms professional portfolio website using modern web
                    technologies
                  </li>
                  <li>
                    Implemented client contact systems including email, phone, and WhatsApp
                    integration for easier communication
                  </li>
                  <li>
                    Developed digital legal forms for documents such as deed of transfer and last
                    will for client submissions
                  </li>
                  <li>
                    Provide IT support and maintain the firms digital infrastructure and online
                    presence
                  </li>
                </ul>
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
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C Programming</span>
                    <span className={styles.skillTag}>HTML5</span>
                    <span className={styles.skillTag}>CSS3</span>
                    <span className={styles.skillTag}>SQL</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                    <span className={styles.skillTag}>Responsive Design</span>
                    <span className={styles.skillTag}>UI/UX Fundamentals</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>Supabase</span>
                    <span className={styles.skillTag}>REST APIs</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools & Platforms</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>GitHub</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Linux (Ubuntu)</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Cybersecurity</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Network Security</span>
                    <span className={styles.skillTag}>System Hardening</span>
                    <span className={styles.skillTag}>Security Fundamentals</span>
                    <span className={styles.skillTag}>CompTIA A+</span>
                  </div>
                </div>
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
                Outside of programming, I enjoy listening to history podcasts and learning about
                past civilizations, technological breakthroughs, and global events. I also
                appreciate music across many genres, usually choosing what fits my current mood.
                These interests help me unwind, stay curious, and maintain a creative mindset when
                building software.
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
