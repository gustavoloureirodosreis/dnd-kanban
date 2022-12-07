import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, Heading } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        mt={4}
      >
        Welcome to React + TypeScript + Chakra UI
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>
      </Container>
    </>
  )
}

export default App
