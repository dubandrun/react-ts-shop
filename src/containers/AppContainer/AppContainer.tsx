import React, { useEffect } from 'react'
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

const AppContainer: React.FC<IAppContainer> = ({setBooks, isLoading, books}) => {

  useEffect(() => {
    (async function load() {
      try {const responce = await fetch('/data.json')
      const body = await responce.json()
      setBooks(body)}
      catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <App books={books} isLoading={isLoading}/>
  )
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
