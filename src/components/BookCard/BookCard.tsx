import React from 'react'

import { Card, Image, Icon, Button } from 'semantic-ui-react'

import { IAddBook } from '../../types'

export const BookCard = (book: IAddBook)  => {
  const {
    title,
    author,
    image,
    price,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rating,
    addBookToCart,
    addedCount
  } = book

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name='rub' />
        {price}
      </Card.Content>
      <Button onClick={addBookToCart.bind(this, book)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  )
}
