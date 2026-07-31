import React from 'react'
import './dock.scss'

const Dock = () => {
  return (
    <footer className='dock'>
      <div className='icon github'><img src='../dock-icons/github.svg' alt='github' /></div>
      <div className='icon notes'><img src='../dock-icons/note.svg' alt='notes' /></div>
      <div className='icon pdf'><img src='../dock-icons/pdf.svg' alt='pdf' /></div>
      <div className='icon calender'><img src='../dock-icons/calender.svg' alt='calender' /></div>
      <div className='icon spotify'><img src='../dock-icons/spotify.svg' alt='spotify' /></div>
      <div className='icon mail'><img src='../dock-icons/mail.svg' alt='mail' /></div>
      <div className='icon link'><img src='../dock-icons/link.svg' alt='link' /></div>
      <div className='icon cli'><img src='../dock-icons/cli.svg' alt='cli' /></div>
    </footer>
  )
}

export default Dock