// Save this file as: src/App.jsx
// Single-file React portfolio built with Tailwind CSS + Framer Motion + lucide-react
// Default export a React component. Customize text, images, and project cards below.

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Mail, Code, ExternalLink } from 'lucide-react';

// NOTE: This file assumes Tailwind CSS is installed and configured in your project.
// Install dependencies:
// npm install framer-motion lucide-react
// Tailwind setup: https://tailwindcss.com/docs/guides/create-react-app or Vite guide

const projects = [
  {
    title: 'NextGen E-Commerce',
    desc: 'Headless e-commerce with realtime cart and fast caching.',
    tags: ['React', 'Node', 'GraphQL'],
    link: '#'
  },
  {
    title: 'Design System Studio',
    desc: 'Reusable components, tokens and accessible patterns.',
    tags: ['Figma', 'Tailwind', 'Storybook'],
    link: '#'
  },
  {
    title: 'Realtime Dashboard',
    desc: 'High-performance charts with streaming updates.',
    tags: ['React', 'WebSocket', 'D3'],
    link: '#'
  }
];

function IconButton({ onClick, children, title }) {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl shadow-md bg-white/80 backdrop-blur-md hover:scale-[1.03] transition-transform"
    >
      {children}
    </button>
  );
}

export default function App() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-indigo-600 dark:text-indigo-400">Rafi</span> — Web Dev
        </motion.h1>

        <nav className="flex items-center gap-3">
          <IconButton title="toggle-theme" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-xs">{dark ? 'Light' : 'Dark'}</span>
          </IconButton>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium shadow hover:opacity-95"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-12 gap-8 items-center py-16">
          <motion.div
            className="md:col-span-7"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p className="uppercase text-sm tracking-wider text-indigo-600">Senior Frontend Engineer</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">I build fast, beautiful and accessible web apps.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I design and engineer delightful user experiences with attention to performance, accessibility and maintainability. I love component systems, delightful animations and thoughtful UX.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:scale-[1.02] transition">
                <Code size={16} /> View projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 dark:border-slate-700">
                <Mail size={16} /> Contact
              </a>
            </div>

            {/* subtle animated badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.span whileHover={{ scale: 1.06 }} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium">Performance</motion.span>
              <motion.span whileHover={{ scale: 1.06 }} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">Accessibility</motion.span>
              <motion.span whileHover={{ scale: 1.06 }} className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-medium">Design Systems</motion.span>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-2xl overflow-hidden transform-gpu rotate-6 hover:rotate-0 transition-transform">
              {/* Placeholder for profile image - replace with an <img /> */}
              <div className="w-full h-full flex items-end p-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                  <div className="text-sm font-semibold">Rafi — Frontend</div>
                  <div className="text-xs opacity-90">Building joyful experiences</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-bold">Selected projects</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">A few projects that highlight architecture, UI and performance work.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow hover:shadow-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  </div>
                  <a href={p.link} aria-label={`Open ${p.title}`} className="inline-flex items-center gap-2 text-sm">
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800">{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills + About */}
        <section className="py-12 grid md:grid-cols-3 gap-8 items-start">
          <motion.div className="md:col-span-2" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h3 className="text-2xl font-bold">About me</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">I'm a frontend engineer who focuses on shipping polished UI and thoughtful developer experience. I collaborate closely with designers and backend engineers to produce scalable, maintainable systems.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 shadow"> 
                <div className="font-semibold">Performance</div>
                <div className="text-sm mt-1 text-slate-600 dark:text-slate-300">Core Web Vitals, code-splitting, lazy loading.</div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 shadow"> 
                <div className="font-semibold">Design Systems</div>
                <div className="text-sm mt-1 text-slate-600 dark:text-slate-300">Tokens, accessibility, component libraries.</div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 shadow"> 
                <div className="font-semibold">Animation</div>
                <div className="text-sm mt-1 text-slate-600 dark:text-slate-300">Framer Motion for meaningful interactions.</div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 shadow"> 
                <div className="font-semibold">Collaboration</div>
                <div className="text-sm mt-1 text-slate-600 dark:text-slate-300">Mentoring, code reviews, cross-team design.</div>
              </div>
            </div>
          </motion.div>

          <motion.aside className="p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h4 className="font-semibold">Top skills</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>React, Typescript-ready architecture</li>
              <li>Tailwind CSS & design tokens</li>
              <li>Framer Motion & micro-interactions</li>
              <li>Accessibility (WCAG) & testing</li>
            </ul>
          </motion.aside>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-900 shadow">
            <h3 className="text-2xl font-bold">Let’s build something together</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Available for contract & full-time roles. Email me and I’ll get back within a day.</p>

            <form className="mt-6 grid gap-3 sm:grid-cols-2">
              <input className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent" placeholder="Your name" />
              <input className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent" placeholder="Email" />
              <input className="sm:col-span-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent" placeholder="Subject" />
              <textarea className="sm:col-span-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent" rows={5} placeholder="Tell me about the project..."></textarea>

              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-sm text-slate-500">Or email directly: <a href="mailto:you@domain.com" className="text-indigo-600">you@domain.com</a></div>
                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow">Send message</button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Rafi — Built with care · <a href="#" className="underline">Resume</a></div>
        </footer>
      </main>

      {/* Floating quick contact */}
      <motion.a
        href="#contact"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed right-6 bottom-6 rounded-full shadow-lg bg-indigo-600 text-white p-3 flex items-center gap-2"
      >
        <Mail size={16} /> Get in touch
      </motion.a>
    </div>
  );
}