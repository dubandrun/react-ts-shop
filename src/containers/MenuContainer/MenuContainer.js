import { connect } from 'react-redux'
import { removeBookFromCart } from '../../actions/cart'
import uniqBy from 'lodash/uniqBy'
import Header from '../../components/Menu/Menu'

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  totalBooks: cart.items.length,
  items: uniqBy(cart.items, item => item.id)
})

export default connect(mapStateToProps, {
  removeBookFromCart
})(Header)


