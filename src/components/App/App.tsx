import React from 'react'
import { Container, Card } from 'semantic-ui-react'

import { BookCardContainer } from '../BookCard/BookCardContainer'
import { MenuContainer } from '../Menu/MenuContainer'
import { FiltersContainer } from '../Filters/FiltersContainer'

import { IApp } from '../../types'

export const App = (props: IApp) => {
  const { books, isLoading } = props

  return (
    <Container >
      <MenuContainer />
      <FiltersContainer/>
      <Card.Group itemsPerRow={4}>
        {
          isLoading 
            ? 'Загрузка...'
            : books.map((book) => (
              <BookCardContainer key={book.id} {...book}/>
            ))
        }
      </Card.Group>
    </Container>
  )
}
