import {LinkedListNode, LinkedListStructure} from './linked-list'
import React, {useReducer} from 'react'

interface State<T> {
  nodes: LinkedListNode<T>[]
}

type Action<T> =
  | {type: 'APPEND', payload: T}
  | {type: 'PREPEND', payload: T}

export function useLinkedListNodesFactory <T>() {
  const linkedList = new LinkedListStructure<T>()

  function reducer (state: State<T>, action: Action<T>) {
    switch (action.type) {
      case 'APPEND':
        linkedList.append(action.payload)
        state.nodes = linkedList.toArray()
        return state
      case 'PREPEND':
        linkedList.prepend(action.payload)
        state.nodes = linkedList.toArray()
        return state
    }
  }

  return function useLinkedListNodes () {
    const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(reducer, {
      nodes: []
    })

    const append = (value: T) => dispatch({type: 'APPEND', payload: value})
    const prepend = (value: T) => dispatch({type: 'PREPEND', payload: value})

    return {
      nodes: state.nodes,
      append,
      prepend
    }
  }
}
