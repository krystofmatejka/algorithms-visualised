import React, {FC, useState} from 'react'
import styled from 'styled-components'
import {Stage, Layer, Rect, Circle, Text, Group, Line} from 'react-konva'
import {useLinkedListNodes} from './use-linked-list-nodes'
import {TimeComplexityTable} from 'src/components'
import type {Point} from '../../../types'

const NODE_RADIUS = 35
const CANVAS_WIDTH = 820
const CANVAS_HEIGHT = 420

const FormRow = styled.div`
  margin: 10px 0;
`

const LinkedNode: FC<{value: string, point: Point, pointToNext: Point}> = ({value, point, pointToNext}) => {
  return (
    <Group>
      {pointToNext && <Line points={[point.x + NODE_RADIUS, point.y + NODE_RADIUS, pointToNext.x + NODE_RADIUS, pointToNext.y + NODE_RADIUS]} stroke={'#000'}/>}
      <Circle radius={NODE_RADIUS} fill={'#4da0d7'} x={point.x + NODE_RADIUS} y={point.y + NODE_RADIUS} />
      <Text
        text={value}
        x={point.x} y={point.y} width={NODE_RADIUS * 2} height={NODE_RADIUS * 2} fontSize={20}
        align={'center'} verticalAlign={'middle'} fontFamily={'mono'}
      />
    </Group>
  )
}

export function LinkedListPage() {
  const [value, setValue] = useState('')
  const {nodes, append, prepend} = useLinkedListNodes<string>({
    nodeRadius: NODE_RADIUS,
    canvasWidth: CANVAS_WIDTH,
    canvasHeight: CANVAS_HEIGHT,
  })

  return (
    <>
      <h1>Linked list</h1>
      <h2>Complexity</h2>
      <TimeComplexityTable access='O(n)' search='O(n)' insertion='O(1)' deletion='O(1)'/>
      <h2>Description</h2>
      <p>A linked list is a collection of entities which are not stored in sequential order. Instead, each entity has a
        pointer to the next entity.</p>
      <h2>Add value</h2>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormRow>
            <label>
              Value:&nbsp;
              <input value={value} onChange={(e) => {
                if (e.target.value.length <= 3) {
                  setValue(e.target.value)
                }
              }}/>
            </label>
          </FormRow>
          <FormRow>
            <button onClick={(e) => {
              prepend(value)
              setValue('')
            }} disabled={!value}>prepend</button>
            <button onClick={(e) => {
              append(value)
              setValue('')
            }} disabled={!value}>append</button>
          </FormRow>
        </form>
      </div>
      <h2>Scheme</h2>
      <div>
        <Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
          <Layer>
            <Rect width={CANVAS_WIDTH} height={CANVAS_HEIGHT} stroke={'#000'}/>
          </Layer>
          <Layer>
            {
              nodes.map(({node, point, pointToNext}) =>
                  <LinkedNode key={node.value} value={node.value} point={point} pointToNext={pointToNext} />
                )
            }
          </Layer>
        </Stage>
      </div>
      <h2>Resources</h2>
      <ul>
        <li><a href='https://en.wikipedia.org/wiki/Linked_list' target='_blank'>Linked list - Wikipedia</a></li>
        <li><a href='https://www.geeksforgeeks.org/data-structures/linked-list/' target='_blank'>Linked list data structure - GeeksForGeeks</a></li>
      </ul>
    </>
  )
}
