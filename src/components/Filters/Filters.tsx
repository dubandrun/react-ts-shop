import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

import { IFilters } from '../../types'

const Filters = ({ 
  activeItem, 
  handleItemClick, 
  inputValue, 
  onInputChange 
}: IFilters) => (
  <Menu secondary>
    <Menu.Item
      name='all'
      active={activeItem === 'all'}
      onClick={handleItemClick}
    >Все</Menu.Item>
    <Menu.Item
      name='author'
      active={activeItem === 'author'}
      onClick={handleItemClick}
    >Автор</Menu.Item>
    <Menu.Item
      name='priceHigh'
      active={activeItem === 'priceHigh'}
      onClick={handleItemClick}
    >Цена(дорогие)</Menu.Item>
    <Menu.Item
      name='priceLow'
      active={activeItem === 'priceLow'}
      onClick={handleItemClick}
    >Цена(дешевые)</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' onChange={onInputChange} value={inputValue} placeholder='Введите название...' />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default Filters