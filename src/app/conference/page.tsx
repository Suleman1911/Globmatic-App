import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Welcome to Conference page </h1>
      <h2>
        <Link href="/conference/speakers"> Speakers Page</Link>
      </h2>
      <h2>
        <Link href="/conference/sessions"> Sessions Page</Link>
      </h2>
    </div>
  )
}

export default page
