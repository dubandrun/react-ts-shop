import { connect } from 'react-redux'
import { addBookToCart } from '../../actions/cart'

import BookCard from '../../components/BookCard/BookCard'

import { IMapStateToPropsBookCardContainer, IBookCardState } from '../../types'

const mapStateToProps = ({ cart }: IBookCardState, ownProps: any): IMapStateToPropsBookCardContainer => {
  return {
    addedCount: cart.items.reduce(
      (count, book) => count + (book.id === ownProps.id ? 1 : 0),
      0
    )
  }
}

export default connect(mapStateToProps, {
  addBookToCart
})(BookCard)


