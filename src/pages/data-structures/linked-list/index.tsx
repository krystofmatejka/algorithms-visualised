import React, {useState} from 'react'
import styled from 'styled-components'
import {Stage, Layer, Rect, Circle, Text, Group, Line} from 'react-konva'
import {useLinkedListNodesFactory} from './use-linked-list-nodes'
import {TimeComplexityTable} from 'src/components'

const FormRow = styled.div`
  margin: 10px 0;
`

const LinkedNode = ({value, x, y, x1, y1}: {value: string, x: number, y: number, x1: number, y1: number,}) => {
  const radius = 35
  return (
    <Group>
      {x1 && y1 && <Line points={[x + 35, y + 35, x1 + 35, y1 + 35]} stroke={'#000'}/>}
      <Circle radius={35} fill={'#4da0d7'} x={x+radius} y={y+radius} />
      <Text
        text={value}
        x={x} y={y} width={70} height={70} fontSize={20}
        align={'center'} verticalAlign={'middle'} fontFamily={'mono'}
      />
    </Group>
  )
}

const useLinkedListNodes = useLinkedListNodesFactory<string>()

export function LinkedListPage() {
  const [value, setValue] = useState('')
  const {nodes, append, prepend} = useLinkedListNodes({nodesPerRow: 7})

  return (
    <>
      <h1>Linked list</h1>
      <h2>Complexities</h2>
      <TimeComplexityTable access='O(n)' search='O(n)' insertion='O(1)' deletion='O(1)'/>
      <h2>Description</h2>
      <p>A linked list is a collection of entities which are not stored in sequential order. Instead, each entity has a
        pointer to the next entity.</p>
      <h2>Control</h2>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormRow>
            <label>
              Value:&nbsp;
              <input value={value} onChange={(e) => setValue(e.target.value)}/>
            </label>
          </FormRow>
          <FormRow>
            <button onClick={(e) => {
              prepend(value)
              setValue('')
            }}>prepend</button>
          </FormRow>
          <FormRow>
            <button onClick={(e) => {
              append(value)
              setValue('')
            }}>append</button>
          </FormRow>
        </form>
      </div>
      <h2>Scheme</h2>
      <div>
        <Stage width={820} height={400}>
          <Layer>
            <Rect width={820} height={400} stroke={'#000'}/>
          </Layer>
          <Layer>
            {
              nodes.map(({node, point, pointToNext}) =>
                  <LinkedNode key={node.value} value={node.value} x={point.x} y={point.y} x1={pointToNext.x} y1={pointToNext.y} />
                )
            }
          </Layer>
        </Stage>
      </div>
      <h2>Extensions</h2>
      <h2>Resources</h2>
    </>
  )
}
