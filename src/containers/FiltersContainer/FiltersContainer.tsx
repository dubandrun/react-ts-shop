import React from 'react'
import { connect } from 'react-redux'
import Filters from '../../components/Filters/Filters'
import { setFilter, setSearch } from '../../actions/filter'

import { 
  IMapStateToPropsFilterContainer, 
  IFilter, 
  IFilterContainer 
} from '../../types'

const FiltersContainer = ({
  setFilter, 
  setSearch, 
  activeItem, 
  inputValue
}: IFilterContainer) => {

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: any): void => {
    setFilter(name)
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

export default connect(mapStateToProps, {
  setFilter, setSearch
})(FiltersContainer)
