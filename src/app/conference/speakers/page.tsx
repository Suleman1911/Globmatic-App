import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Welcome to Globmatic Speakers </h1>
      <h2>
        <Link href="/conference"> Back to Conference</Link>
      </h2>
    </div>
  )
}

export default page
