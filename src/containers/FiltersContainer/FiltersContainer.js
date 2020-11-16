import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filters from '../../components/Filters/Filters'
import { setFilter, setSearch } from '../../actions/filter'

class FiltersContainer extends Component {

  handleItemClick = (e, { name }) => {
    const { setFilter } = this.props
    setFilter(name)
  }

  onInputChange = (e) => {
    const { setSearch } = this.props
    setSearch(e.target.value)
  }

  render() {
    const { activeItem, value } = this.props
    return (
      <Filters 
        handleItemClick={this.handleItemClick} 
        onInputChange={this.onInputChange}
        activeItem={activeItem}
        value={value}
      />
    )
  }
}


const mapStateToProps = ({ filter }) => ({
  activeItem: filter.filteredBy,
  value: filter.search
})

export default connect(mapStateToProps, {
  setFilter, setSearch
})(FiltersContainer)
