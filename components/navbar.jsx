import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/portfolio/bio">bio</Link>
        <Link href="/portfolio/projects">projects</Link>
    </div>
  )
}

export default Navbar