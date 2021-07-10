import {useReducer, useEffect, useRef} from 'react'
import {LinkedListNode, LinkedListStructure} from '../../../data-structures'
import type {Point} from '../../../types'

type Props = {
  nodeRadius: number
  canvasWidth: number
  canvasHeight: number
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

const addPointsToNodes = <T>(nodes: LinkedListNode<T>[], props: Props): NodeWithMeta<T>[] => {
  const diameter = props.nodeRadius * 2
  const oneSideMargin = Math.round(props.nodeRadius / 2)
  const nodesPerRow = Math.round(props.canvasWidth / (diameter * 2))
  const nodesWithMeta = []

  nodes.forEach((node, index) => {
    const rowNumber = Math.floor(index / nodesPerRow)
    const isOdd = !!(rowNumber % 2)
    const x = (index % nodesPerRow) * diameter * 2

    const point = {
      x: (isOdd) ? props.canvasWidth - oneSideMargin - diameter - x : x + oneSideMargin,
      y: rowNumber * (props.nodeRadius * 3) + oneSideMargin
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

export const useLinkedListNodes = <T>(props: Props) => {
  const linkedList = useRef<LinkedListStructure<T>>(null)
  const [state, dispatch] = useReducer((state: State<T>, action: Action<T>) => {
    switch (action.type) {
      case 'APPEND':
        linkedList.current.append(action.payload)
        return {
          nodes: addPointsToNodes(linkedList.current.toArray(), action.props)
        }
      case 'PREPEND':
        linkedList.current.prepend(action.payload)
        return {
          nodes: addPointsToNodes(linkedList.current.toArray(), action.props)
        }
    }
  }, {
    nodes: []
  })

  const append = (value: T) => dispatch({type: 'APPEND', payload: value, props})
  const prepend = (value: T) => dispatch({type: 'PREPEND', payload: value, props})

  useEffect(() => {
    linkedList.current = new LinkedListStructure<T>()

    return function useLinkedListNodesCleanup () {
      linkedList.current = null
    }
  }, [])

  return {
    nodes: state.nodes,
    append,
    prepend
  }
}
