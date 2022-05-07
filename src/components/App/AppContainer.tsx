import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { orderBy } from 'lodash'

import { setBooks, setBooksLoading } from '../../store/actions/books'
import { addBookToCart, removeBookFromCart } from '../../store/actions/cart'
import { App } from './App'

import { 
  IAddBook, 
  IMapStateToPropsAppContainer, 
  IBooksAndFilter,
  IAppContainer, 
  IBookData
} from '../../types'
import { FILTER } from '../../enums';

const AppContainer = (props: IAppContainer) => {
  const { setBooks, setBooksLoading, isLoading, books } = props

  const getBooks = async () => { 
    try {
      setBooksLoading(true)

      const response = await fetch('/data.json')
      const booksData: IBookData[] = await response.json()

      setBooks(booksData)

      setBooksLoading(false)
    }
    catch (error) {
      setBooksLoading(false)

      console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <App books={books} isLoading={isLoading}/>
  )
}

const sortBooks = (books: IAddBook[], filteredBy: FILTER): IAddBook[] => {
  const sortedBooks: Record<FILTER, IAddBook[]> = {
    popular: orderBy(books, 'rating', 'desc'),
    priceHigh: orderBy(books, 'price', 'desc'),
    priceLow: orderBy(books, 'price', 'asc'),
    author: orderBy(books, 'author', 'asc'),
    all: books      
  }

  return sortedBooks[filteredBy]
}

const filterBooks = (books: IAddBook[], search: string): IAddBook[] => 
  books.filter(item => 
    item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
    item.author.toLowerCase().indexOf(search.toLowerCase()) >= 0 
)

const searchBooks = (books: IAddBook[], filteredBy: FILTER, search: string): IAddBook[] => {
  return sortBooks(filterBooks(books, search), filteredBy)
}

const mapStateToProps = ({ books, filter }: IBooksAndFilter): IMapStateToPropsAppContainer => (
  {
    books: searchBooks(books.items, filter.filteredBy, filter.search),
    isLoading: books.isLoading
  }
)

const ConnectedAppContainer = connect(mapStateToProps, {
  setBooks, setBooksLoading, addBookToCart, removeBookFromCart
})(AppContainer)

export { ConnectedAppContainer as AppContainer }
