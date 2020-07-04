import React from 'react'
import {TimeComplexityTable} from 'src/components'

export function HashTablePage() {
  return (
    <>
      <h1>Hash table</h1>
      <h2>Complexities</h2>
      <TimeComplexityTable access={'O(1)'} search={'?'} insertion={'?'} deletion={'?'} />
      <h2>Description</h2>
      <p>A hash table is data structure that map keys to values and can provide access to data in constant time.</p>
    </>
  )
}
