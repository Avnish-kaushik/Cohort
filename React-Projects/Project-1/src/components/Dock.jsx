import React from 'react'
import './dock.scss'

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }))
        }}
        className="icon github"
      >
        <img src="../dock-icons/github.svg" alt="github" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }))
        }}
        className="icon notes"
      >
        <img src="../dock-icons/note.svg" alt="notes" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }))
        }}
        className="icon pdf"
      >
        <img src="../dock-icons/pdf.svg" alt="pdf" />
      </div>
      <div
        onClick={() => {
          window.open('https://calendar.google.com/', '_blank')
        }}
        className="icon calender"
      >
        <img src="../dock-icons/calender.svg" alt="calender" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }))
        }}
        className="icon spotify"
      >
        <img src="../dock-icons/spotify.svg" alt="spotify" />
      </div>
      <div
        onClick={() => {
          window.open('mailto:kaushikavi7002@gmail.com', '_blank')
        }}
        className="icon mail"
      >
        <img src="../dock-icons/mail.svg" alt="mail" />
      </div>
      <div
        onClick={() => {
          window.open('https://www.linkedin.com/in/iavnishkaushik/', '_blank')
        }}
        className="icon link"
      >
        <img src="../dock-icons/link.svg" alt="link" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }))
        }}
        className="icon cli"
      >
        <img src="../dock-icons/cli.svg" alt="cli" />
      </div>
    </footer>
  )
}

export default Dock
