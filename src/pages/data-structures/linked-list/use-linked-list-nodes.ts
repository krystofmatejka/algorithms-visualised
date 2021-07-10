import React, {useReducer} from 'react'
import {LinkedListNode, LinkedListStructure} from './linked-list'

type Point = {
  x: number
  y: number
}

type Props = {
  nodesPerRow: number
}

type NodeWithMeta<T> = {
  node: LinkedListNode<T>
  point: Point
  pointToNext: Point
}

type State<T> = {
  nodes: NodeWithMeta<T>[]
}

type Action<T> =
  | {type: 'APPEND', payload: T, props: Props}
  | {type: 'PREPEND', payload: T, props: Props}

export function useLinkedListNodesFactory <T>() {
  const linkedList = new LinkedListStructure<T>()

  const addPointsToNodes = <T>(nodes: LinkedListNode<T>[]): NodeWithMeta<T>[] => {
    const nodesWithMeta = []

    nodes.forEach((node, index) => {
      const rowNumber = Math.floor(index / 7)
      const isOdd = !!(rowNumber % 2)
      const x = (index % 7) * 120

      const point = {
        x: (isOdd) ? 735 - x : x + 15,
        y: rowNumber * 100 + 15
      }

      nodesWithMeta.push({
        node,
        point,
        pointToNext: {}
      })

      if (index > 0) {
        const previous = nodesWithMeta[index - 1]
        previous.pointToNext = point
      }
    })

    return nodesWithMeta
  }

  const reducer = (state: State<T>, action: Action<T>, props: Props): State<T> => {
    switch (action.type) {
      case 'APPEND':
        linkedList.append(action.payload)
        return {
          nodes: addPointsToNodes(linkedList.toArray())
        }
      case 'PREPEND':
        linkedList.prepend(action.payload)
        return {
          nodes: linkedList.toArray()
        }
    }
  }

  return function useLinkedListNodes (props: Props) {
    const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(reducer, {
      nodes: []
    })

    const append = (value: T) => dispatch({type: 'APPEND', payload: value, props})
    //const prepend = (value: T) => dispatch({type: 'PREPEND', payload: value, props})
    const prepend = (value: T) => null

    return {
      nodes: state.nodes,
      append,
      prepend
    }
  }
}
