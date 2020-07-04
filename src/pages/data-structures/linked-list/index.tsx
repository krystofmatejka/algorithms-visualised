import React, {useState} from 'react'
import styled from 'styled-components'
import {Stage, Layer, Rect, Circle, Text, Group, Line} from 'react-konva'
import {useLinkedListNodesFactory} from './use-linked-list-nodes'
import {TimeComplexityTable} from 'src/components'

const FormRow = styled.div`
  margin: 10px 0;
`

const LinkedNode = ({value, x, y, isLast}: {value: string, x: number, y: number, isLast: boolean}) => {
  const radius = 35
  return (
    <Group>
      <Circle radius={35} fill={'#4da0d7'} x={x+radius} y={y+radius} />
      <Text
        text={value}
        x={x} y={y} width={70} height={70} fontSize={20}
        align={'center'} verticalAlign={'middle'} fontFamily={'mono'}
      />
      {!isLast && <Line points={[x+70, 50, x+70+120, 50]} stroke={'#000'}/>}
    </Group>
  )
}

const useLinkedListNodes = useLinkedListNodesFactory<string>()

export function LinkedListPage() {
  const [value, setValue] = useState('')
  const {nodes, append, prepend} = useLinkedListNodes()

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
        <Stage width={800} height={100}>
          <Layer>
            <Rect width={800} height={100} stroke={'#000'}/>
          </Layer>
          <Layer>
            {
              nodes.map((node, i) =>
                  <LinkedNode key={node.value} value={node.value} x={15 + (i * 120)} y={15} isLast={i+1 === nodes.length} />
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
