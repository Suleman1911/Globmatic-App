import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Welcome to Home page </h1>
      <h2>
        <Link href="/blog"> Blog Page</Link>
      </h2><h2>
        <Link href="/settings"> Settings Page</Link>
      </h2><h2>
        <Link href="/conference"> Conference Page</Link>
      </h2>
    </div>
  )
}

export default page
