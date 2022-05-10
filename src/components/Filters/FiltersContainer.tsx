import React, { ChangeEvent, MouseEvent } from 'react'
import { connect } from 'react-redux'
import { MenuItemProps } from 'semantic-ui-react'

import { Filters } from './Filters'
import { setFilter, setSearch } from '../../store/actions/filter'

import {
  IMapStateToPropsFilterContainer,
  IFilter,
  IFilterContainer
} from '../../types'

const FiltersContainer = (props: IFilterContainer) => {
  const {
    setFilter,
    setSearch,
    activeItem,
    inputValue
  } = props

  const handleItemClick = (e: MouseEvent<HTMLAnchorElement>, { name = '' }: MenuItemProps): void => {
    setFilter(name)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  return (
    <Filters
      handleItemClick={handleItemClick}
      onInputChange={onInputChange}
      activeItem={activeItem}
      inputValue={inputValue}
    />
  )
}

const mapStateToProps = ({ filter }: IFilter): IMapStateToPropsFilterContainer => ({
  activeItem: filter.filteredBy,
  inputValue: filter.search
})

const ConnectedFiltersContainer = connect(mapStateToProps, { setFilter, setSearch })(FiltersContainer)

export { ConnectedFiltersContainer as FiltersContainer }
