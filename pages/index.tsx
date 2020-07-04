import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <>
      <h1>Data structures & Algorithms</h1>
      <nav>
        <ul>
          <li>
            <Link href={'hash-table'}>
              <a>Hash Table</a>
            </Link>
          </li>
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
