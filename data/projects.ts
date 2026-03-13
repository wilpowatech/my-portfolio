export interface Project {
  title: string
  description: string
  logo: string
  link: string
  slug: string
}

export const projects: Project[] = [
  {
    title: 'Wilpowa Tech Academy',
    description:
      'An educational platform focused on teaching African youth web development and software engineering.',
    logo: '/logos/wilpowa.png',
    link: 'https://wilpowa.netlify.app/',
    slug: 'wilpowa-tech-academy',
  },
  {
    title: 'M. A. Idaiye & Co.',
    description:
      'A professional law office website providing information about legal services and client contact.',
    logo: '/logos/maidaiye.png',
    link: 'https://wilpowatech.github.io/maidaiye/',
    slug: 'maidaiye-law',
  },
  {
    title: 'Omonsiah Venture',
    description: 'A business website built to showcase services and provide an online presence.',
    logo: '/logos/omonsiah.png',
    link: 'https://wilpowatech.github.io/Omonsiah_Venture/',
    slug: 'omonsiah-venture',
  },
]
