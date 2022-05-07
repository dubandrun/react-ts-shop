import { connect } from 'react-redux'

import { addBookToCart } from '../../store/actions/cart'
import { BookCard } from './BookCard'

import { IMapStateToPropsBookCardContainer, IBookCardState, IAddBook } from '../../types'

const mapStateToProps = ({ cart }: IBookCardState, ownProps: IAddBook): IMapStateToPropsBookCardContainer => (
  {
    addedCount: cart.items.reduce(
      (count, book) => count + (book.id === ownProps.id ? 1 : 0),
      0
    )
  }
)

const ConnectedBookCard = connect(mapStateToProps, { addBookToCart })(BookCard)

export { ConnectedBookCard as BookCardContainer }