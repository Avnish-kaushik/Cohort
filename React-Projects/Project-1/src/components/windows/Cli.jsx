import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: 'Learn a little about the portfolio owner.',
      usage: 'about',
      fn: () => 'I am Avnish Kaushik, a frontend developer building polished web experiences.',
    },
    skills: {
      description: 'Show the main technologies I work with.',
      usage: 'skills',
      fn: () => 'React • Vite • JavaScript • HTML • CSS • SASS • Git',
    },
    projects: {
      description: 'Show featured portfolio projects.',
      usage: 'projects',
      fn: () => 'This portfolio includes React-based projects, UI experiments, and mini web apps.',
    },
    contact: {
      description: 'Show a dummy contact message.',
      usage: 'contact',
      fn: () => 'Reach out at avnish@example.com for collaborations and opportunities.',
    },
    resume: {
      description: 'Show a short resume summary.',
      usage: 'resume',
      fn: () =>
        'Frontend Developer | Focused on clean UI, responsive design, and smooth user experience.',
    },
  }

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli">
        <Terminal
          commands={commands}
          welcomeMessage={`Welcome to Avnish's portfolio terminal.\n\nAvailable commands:\n  help      Show a list of commands\n  about     Learn about me\n  skills    See my skills\n  projects  View featured projects\n  contact   Get in touch\n  resume    View a resume summary`}
          promptLabel={'avnishkaushik:~$'}
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
