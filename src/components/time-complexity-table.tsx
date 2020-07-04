import React from 'react'

interface TimeComplexityTableProps {
  access: string,
  search: string,
  insertion: string,
  deletion: string
}

export function TimeComplexityTable (props: TimeComplexityTableProps) {
  return (
    <table>
      <thead>
      <tr>
        <td>Access</td>
        <td>Search</td>
        <td>Insertion</td>
        <td>Deletion</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{props.access}</td>
        <td>{props.search}</td>
        <td>{props.insertion}</td>
        <td>{props.deletion}</td>
      </tr>
      </tbody>
    </table>
  )
}
