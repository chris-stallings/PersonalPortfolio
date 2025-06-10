import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
  <div className="container mx-auto">
    <nav className="flex items-center">
        <button className="btn"><Link href="/">Chris Stallings</Link></button>
        <button className="btn"><Link href="/about">About Me</Link></button>
        <button className="btn"><Link href="/projects">Projects</Link></button>
        <button className="btn"><Link href="/resume">Resume</Link></button>
        <button className="btn"><Link href="/contact">Contact</Link></button>
    </nav>
  </div>
  )
}

export default Navbar