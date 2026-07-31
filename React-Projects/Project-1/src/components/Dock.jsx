import React from 'react'
import './dock.scss'

const Dock = () => {
  return (
    <footer className='dock'>
      <div className='icon github'><img src='../icons/github.svg' alt='github' /></div>
      <div className='icon notes'><img src='../icons/note.svg' alt='notes' /></div>
      <div className='icon pdf'><img src='../icons/pdf.svg' alt='pdf' /></div>
      <div className='icon calender'><img src='../icons/calender.svg' alt='calender' /></div>
      <div className='icon spotify'><img src='../icons/spotify.svg' alt='spotify' /></div>
      <div className='icon mail'><img src='../icons/mail.svg' alt='mail' /></div>
      <div className='icon link'><img src='../icons/link.svg' alt='link' /></div>
      <div className='icon cli'><img src='../icons/cli.svg' alt='cli' /></div>
    </footer>
  )
}

export default Dock