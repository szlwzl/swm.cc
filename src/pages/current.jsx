import Head from 'next/head'

import {
  AcademicCapIcon,
  CommandIcon,
  MusicalNoteIcon,
  UsersIcon,
  UserPlusIcon,
  UserMinusIcon,
  BookOpenIcon,
  TvIcon,
  ChatBubbleLeftIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

import { SimpleLayout } from '@/components/SimpleLayout'

const actions = [
  {
    title: 'Watching',
    href: '#',
    icon: TvIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    description: "Curious about what's captivating my screen time? Whether it's the latest netflix offering or the latest blockbuster, find out what I'm watching here."
  },
  {
    title: 'Reading',
    href: '#',
    icon: BookOpenIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    description: "Dive into the pages I'm currently flipping through. From tech manuals to comic books, discover what's currently shaping my perspectives."
  },
  {
    title: 'Thinking',
    href: '#',
    icon: ChatBubbleLeftIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    description: "What's occupying my thoughts lately? Whether it's a current issue or a personal reflection, you'll find a hint of my mental landscape here."
  },
  {
    title: 'Eating',
    href: '#',
    icon: UserMinusIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    description: "Navigating life with Type 2 diabetes, this section holds me accountable by sharing what I'm currently eating to manage my condition."
  },
  {
    title: 'Coding',
    href: '#',
    icon: CommandLineIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    description: "Get a glimpse of my current coding endeavors. Projects, languages, or a code kata—it's a peek into my digital playground."
  },
  {
    title: 'Learning',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description: "What am I learning? From new skills to new perspectives, this is where I share my current thirst for new things. Both technical and whatever else 😀."
  },
  {
    title: 'Training',
    href: '#',
    icon: UserPlusIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description: " I'm currently striving to shed some (lots of) pounds while building endurance and strength. Track my fitness journey and routine here."
  },
  {
    title: 'Listening',
    href: '#',
    icon: MusicalNoteIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description: "Tune in to what's filling my ears at the moment. From podcasts to playlists, discover the sounds that inspire me."
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <Head>
        <title>Current Stuffs - Stephen McCullough</title>
        <meta
          name="description"
          content="My current 'stuffs' - such as what I am reading, coding, eating, thinking etc."
        />
      </Head>
      <SimpleLayout
        title="What I am currently doing now. "
        intro="Stay up-to-date with what I'm currently focused on. From the books enriching my mind to the projects capturing my attention, this page offers a snapshot of my active pursuits, reflections and thoughts. Each section has an archive section for past musings and info  ."
      >
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={
                classNames(
                  actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                  actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                  actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                  actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                  'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white'
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
