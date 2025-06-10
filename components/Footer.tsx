import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside className="items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Chris Stallings</p><a href="https://www.linkedin.com/in/chriscms"><FaLinkedin /></a>
  </aside>
</footer>
  )
}

export default Footer