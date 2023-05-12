import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoSwmcc from '@/images/logos/swmcc.svg'
import logoTheMcCulloughs from '@/images/logos/the-mcculloughs.svg'
import logoPulp from '@/images/logos/pulp.svg'
import logoTvDB from '@/images/logos/tvdb.svg'
import logoLinks from '@/images/logos/links.svg'
import logoBookMarks from '@/images/logos/bookmarks.svg'
import logoWhatIsOnTheTv from '@/images/logos/whatisonthetv.svg'
import logoMaProject from '@/images/logos/maproject.svg'


const projects = [
  {
    name: 'the-mcculloughs.org',
    description:
      'A digitised family slide, photo and video album for my family.',
    link: { href: '/projects/themcculloughs' },
    logo: logoTheMcCulloughs,
  },
  {
    name: 'swm.cc',
    description:
      'My personal website, built with Next.js, Tailwind CSS and TypeScript.',
    link: { href: '/projects/swmcc' },
    logo: logoSwmcc,
  },
  {
    name: 'pulp',
    description:
      'My utility app. Just a kitchen sink of stuffs I have written.',
    link: { href: '/projects/pulp' },
    logo: logoPulp,
  },
  {
    name: 'tvdb',
    description:
      'TheTVDB is one of the longest-running community-driven TV and Movie databases.',
    link: { href: '#' },
    logo: logoTvDB,
  },
  {
    name: 'links',
    description:
      'All the kool kidz have them, so I made one too.',
    link: { href: '/projects/links' },
    logo: logoLinks,
  },
  {
    name: 'bookmarks',
    description:
      'My bookmarks app. I use this to store all my bookmarks, and then sync them to various devices.',
    link: { href: '#' },
    logo: logoBookMarks,
  },
  {
    name: 'whatisonthe.tv',
    description:
      'COMING SOON....',
    link: { href: '#' },
    logo: logoWhatIsOnTheTv,
  },
  {
    name: 'Ma Project',
    description:
      'My Project held in the cloud at GitHub.',
    link: { href: 'https://github.com/users/swmcc/projects/6' },
    logo: logoMaProject,
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Stephen McCullough</title>
        <meta
          name="description"
          content="Things I’ve made, making or thinking about."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made, making or thinking about."
        intro="I’ve worked on tons of little projects over the years. Currently there is only this site on here, this will change with time. All of them will be open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
