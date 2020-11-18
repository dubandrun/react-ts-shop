import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filters from '../../components/Filters/Filters'
import { setFilter, setSearch } from '../../actions/filter'

import { 
  IMapStateToPropsFilterContainer, 
  IFilter, 
  IFilterContainer 
} from '../../types'

class FiltersContainer extends Component<IFilterContainer> {

  handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: any): void => {
    const { setFilter } = this.props
    setFilter(name)
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { setSearch } = this.props
    setSearch(e.target.value)
  }

  render() {
    const { activeItem, inputValue } = this.props
    return (
      <Filters 
        handleItemClick={this.handleItemClick} 
        onInputChange={this.onInputChange}
        activeItem={activeItem}
        inputValue={inputValue}
      />
    )
  }
}


const mapStateToProps = ({ filter }: IFilter): IMapStateToPropsFilterContainer => ({
  activeItem: filter.filteredBy,
  inputValue: filter.search
})

export default connect(mapStateToProps, {
  setFilter, setSearch
})(FiltersContainer)
