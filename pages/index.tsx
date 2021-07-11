import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>Data structures & Algorithms</h1>
      <nav>
        <ul>
          <li>
            <Link href={'linked-list'}>
              <a>Linked List</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Home
