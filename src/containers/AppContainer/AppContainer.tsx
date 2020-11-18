import React, { Component } from 'react'
import { connect } from 'react-redux';
import { orderBy } from 'lodash'

import { setBooks } from '../../actions/books'
import { addBookToCart, removeBookFromCart } from '../../actions/cart'

import App from '../../App'

import { 
  IAddBook, 
  IMapStateToPropsAppContainer, 
  IBooksAndFilter,
  IAppContainer 
} from '../../types'

const sortBy = (books: Array<IAddBook>, filteredBy: string): Array<IAddBook> => {
  switch (filteredBy) {
    case 'popular':
      return orderBy(books, 'rating', 'desc')
    case 'priceHigh':
      return orderBy(books, 'price', 'desc')
    case 'priceLow':
      return orderBy(books, 'price', 'asc')
    case 'author':
      return orderBy(books, 'author', 'asc')
    default:
      return books;     
  }
}

const filterBooks = (books: Array<IAddBook>, search: string): Array<IAddBook> => 
  books.filter(item => 
    item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
    item.author.toLowerCase().indexOf(search.toLowerCase()) >= 0 
)

const searchBooks = (books: Array<IAddBook>, filteredBy: string, search: string): Array<IAddBook> => {
  return sortBy(filterBooks(books, search), filteredBy)
}


class AppContainer extends Component<IAppContainer> {

  componentDidMount(): void {
    const { setBooks } = this.props 
    fetch('/data.json')
      .then(res => res.json())
      .then(res => setBooks(res))
  }

  render() {
    const { books, isLoading } = this.props
    return (
      <App books={books} isLoading={isLoading}/>
    )
  }
}


const mapStateToProps = ({ books, filter }: IBooksAndFilter): IMapStateToPropsAppContainer => {
  return {
    books: searchBooks(books.items, filter.filteredBy, filter.search),
    isLoading: books.isLoading
  }
}

export default connect(mapStateToProps, {
  setBooks, addBookToCart, removeBookFromCart,
})(AppContainer)
