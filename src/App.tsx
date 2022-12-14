import { useState } from 'react'
import './App.css'
import Column from './components/Column'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { ColumnType } from './utils/enums'

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
        Welcome to DnD Kanban
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} />
          <Column column={ColumnType.COMPLETED} />
        </SimpleGrid>
      </Container>
    </>
  )
}

export default App
