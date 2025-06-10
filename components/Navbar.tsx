import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
  <div className="container mx-auto">
    <nav className="flex items-center">
      <Link href="/">Chris Stallings</Link>
      <Link href="/about">About Me</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </div>
  )
}

export default Navbar