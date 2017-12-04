import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import Flex from './flex.js'
import FlexItem from './item.js'

const App = () => [
  <Flex column justifyBetween alignEnd>
    <FlexItem order="2">
      <Hello name="CodeSandbox" />
    </FlexItem>
    <FlexItem order="1">
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
    </FlexItem>
  </Flex>,
  <Flex center wrap>
    <FlexItem basis="100%" grow>
      <Flex center>
        <Hello name="CodeSandbox" />
      </Flex>
    </FlexItem>
    <FlexItem>
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
    </FlexItem>
  </Flex>
]

render(<App />, document.getElementById('root'))
