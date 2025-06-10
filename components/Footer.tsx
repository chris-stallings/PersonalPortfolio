import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside className="items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Chris Stallings</p>
    <p><a href="https://www.linkedin.com/in/chriscms"><FaLinkedin /></a><a href=""></a><a href="https://github.com/chris-stallings"><FaGithub /></a></p>
  </aside>
</footer>
  )
}

export default Footer