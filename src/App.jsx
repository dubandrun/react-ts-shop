import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import './App.css'
import BookCardContainer from './containers/BookCardContainer/BookCardContainer'
import MenuContainer from './containers/MenuContainer/MenuContainer'
import FiltersContainer from './containers/FiltersContainer/FiltersContainer'

const App = ({ books, isLoading }) => (
  <Container >
    <MenuContainer />
    <FiltersContainer/>
    <Card.Group itemsPerRow={4}>
      {
        !isLoading 
          ? 'Загрузка...'
          : books.map((book) => (
            <BookCardContainer key={book.id} {...book}/>))
      }
    </Card.Group>
  </Container>
  )

export default App
