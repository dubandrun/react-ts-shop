import React from 'react'
import { Menu, List, Button, Image, Popup, } from 'semantic-ui-react'

import { IMenuCart, IMenuHeader } from '../../types'

const Cart = ({ 
  title, 
  id, 
  image, 
  removeBookFromCart 
}: IMenuCart) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeBookFromCart.bind(this, id)}>Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)

export const Header = (props: IMenuHeader) => {
  const {
    totalPrice, 
    totalBooks, 
    items, 
    removeBookFromCart
  } = props

  return (
    <Menu>
      <Menu.Item>
        Магазин книг
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
        </Menu.Item>
        <Popup 
          trigger={
            <Menu.Item>
              Корзина &nbsp; (<b>{totalBooks}</b>)
            </Menu.Item>
          }
          content={items.map(book => 
            <Cart 
              key={book.id} 
              {...book} 
              removeBookFromCart={removeBookFromCart}
            />
          )}
          on='click'
          hideOnScroll
        />
      </Menu.Menu>
    </Menu>
  )
}