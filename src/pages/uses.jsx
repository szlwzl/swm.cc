import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Stephen McCullough</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
              The price of this was a bit of a shock. I’m not sure I would spend
              this much on a laptop again, but I’m glad I did. It's usually hooked
              on two 32 4K monitors. A basic electronic QWERTY mechanical keyboard
              and an old fashioned USB mouse. An IKEA standing desk and a standard office chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="vim/neovim/VSCode">
            I love vim/neovim. I've been using it for years and I'm still learning new things about it.
            However lately I have been using VSode more and more. I'm not sure why, but I think it's 
            because i find myself tinkering with the settings on neovim instead of developing. Of course
            I use the vim plugin for VSCode. I'm not sure if I'll ever go back to using vim/neovim exclusively.
            </Tool>
            <Tool title="iTerm2">
              There was a reason I moved from the Terminal.app to iTerm2 but I cannot remember why.
              I use it for all my terminal needs, which is plenty as the terminal on VSCode gets ignored
              by me mostly. I use the Solarized Dark theme and my shell is zsh.
            </Tool>
            <Tool title="git">
              I use git for everything. I use it for my personal projects and my work projects.
              The servies I use on top of that are mostlhy GitHub and a bit of GitLab.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I only started using Figma a few months ago but I'm already hooked. I use it for all my design needs.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
            </Tool>
            <Tool title="Notion">
              I basically use it as a note taking system instead of trying to keep things
              in text files and organising by topics has been super powerful for me.
            </Tool>
            <Tool title="Dash">
              Great tool for looking up programming questions while protecting my workflow.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
            <Tool title="Spotify">
              When it comes to music it has to be Spotify.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
