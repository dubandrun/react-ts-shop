import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

import { FILTER } from '../../enums'
import { IFilters } from '../../types'

export const Filters = (props: IFilters) => {
  const {
    activeItem,
    handleItemClick,
    inputValue,
    onInputChange
  } = props

  return (
    <Menu secondary>
      <Menu.Item
        name={FILTER.ALL}
        active={activeItem === FILTER.ALL}
        onClick={handleItemClick}
      >
        Все
      </Menu.Item>
      <Menu.Item
        name={FILTER.AUTHOR}
        active={activeItem === FILTER.AUTHOR}
        onClick={handleItemClick}
      >
        Автор
      </Menu.Item>
      <Menu.Item
        name={FILTER.PRICE_HIGH}
        active={activeItem === FILTER.PRICE_HIGH}
        onClick={handleItemClick}
      >
        Цена(дорогие)
      </Menu.Item>
      <Menu.Item
        name={FILTER.PRICE_LOW}
        active={activeItem === FILTER.PRICE_LOW}
        onClick={handleItemClick}
      >
        Цена(дешевые)
      </Menu.Item>
      <Menu position="right">
        <Menu.Item>
          <Input icon="search" onChange={onInputChange} value={inputValue} placeholder="Введите название..." />
        </Menu.Item>
      </Menu>
    </Menu>
  )
}
