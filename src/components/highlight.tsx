import React, {PropsWithChildren} from 'react'
import styled from 'styled-components'

const StyledGoodHighLight = styled.div`
  color: #4b8b23;
`

export function Good(props: PropsWithChildren<{}>) {
  return <StyledGoodHighLight>{props.children}</StyledGoodHighLight>
}

export function warning () {

}
