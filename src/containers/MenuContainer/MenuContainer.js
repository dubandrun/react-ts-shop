import { connect } from 'react-redux'
import { removeBookFromCart } from '../../actions/cart'

import Header from '../../components/Menu/Menu'

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  totalBooks: cart.items.length,
  items: cart.items
})

export default connect(mapStateToProps, {
  removeBookFromCart
})(Header)


