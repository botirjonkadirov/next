import React from 'react'
import Link from 'next/link'
function Headers() {
  return (
    <header className='header'>
        <h1 className='logo'><Link href='/'>My first Next project</Link></h1>
        <div className='links'>
            <Link href='/about'>About</Link>
            <Link href='/about/team'>Our Team</Link>
            <Link href='/code/repo'>Code</Link>
        </div>
    </header>
  )
}

export default Headers