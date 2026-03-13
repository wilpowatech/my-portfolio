import styles from '@/styles/ContactCode.module.css'

const contactItems = [
  {
    social: 'website',
    link: 'github.com',
    href: 'https://github.com/wilpowa/my-portfolio',
  },
  {
    social: 'email',
    link: 'williamkhoko@gmail.com',
    href: 'mailto:williamkhoko@gmail.com',
  },
  {
    social: 'github',
    link: 'wilpowatech',
    href: 'https://github.com/wilpowatech',
  },
  {
    social: 'linkedin',
    link: 'ofiarekhoko',
    href: 'https://www.linkedin.com/in/ofiare-khoko/',
  },
  {
    social: 'twitter',
    link: 'wilpowatech',
    href: 'https://www.twitter.com/khoko2010',
  },
  {
    social: 'telegram',
    link: 'iamnitinr',
    href: 'https://t.me/iamnitinr',
  },
  {
    social: 'peerlist',
    link: 'nitinranganath',
    href: 'https://peerlist.io/nitinranganath',
  },
]

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  )
}

export default ContactCode
