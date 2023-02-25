import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Stephen McCullough</title>
        <meta
          name="description"
          content="I’m Stephen McCullough. I live in Glenavy, where I write software, garden and generally grump about."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Stephen. I write software, garden and generally grump about.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, and
                wrote my first program when I was 9 years old, just a few weeks
                after my Mum brought home a Commodore 64 for Christmas that I
                taught myself to type on.
              </p>
              <p>
                The only thing I loved more than computers as a kid was gardening.
                As a kid, I helped my Mum and Dad out in the garden. My brother 
                and sister had little interest. It's a hobby I have carried into 
                adulthood. I find it very therapeutic.
              </p>
              <p>
                I love creating things. I love the process of taking an idea and
                turning it into something real. This is true for both gardening 
                and software development. Both are highly creative processes that 
                I find very rewarding.
              </p>
              <p>
                Today, I work for $BIG_CORP, where I architect solutions in the cloud.
                Mainly on AWS and Azure. I've attained a few certifications during my 
                time in the industry. I recently attained my AWS Solutions Architect 
                certification. I'm currently working towards my Azure Solutions Architect
                cert.
              </p>
              <p>
                I'm a big fan of open source software. I've contributed to a few projects.
                Before the pandemic, I was a regular speaker at conferences. I've spoken at
                PyCon Ireland 2019 and ElixirConf 2018. I've also spoken at a few local meetups
                and lead Belfast Ruby, Belfast Elixir and PyBelfast for a time.
              </p>
              <p>
              This is my little corner of the internet where I can tinker on things. I'm currently working on a few projects, one of which is this website.
              I'm building this site using <a href="https://nextjs.org/">Next.js</a>, which is a <a href="https://reactjs.org/">React</a> framework.
              I'm learning as I go, so if you see anything that could be improved, please let me know (via a <a href="https://github.com/swmcc/swm.cc/pulls">PR</a> or an <a href="https://github.com/swmcc/swm.cc/issues">Issue</a>)
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.twitter.com/theonlyswmcc" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/swmcc" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://www.github.com/swmcc" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/theonlystephen" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:me@swm.cc"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                me@swm.cc 
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
