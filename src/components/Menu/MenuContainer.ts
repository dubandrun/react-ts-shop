import { connect } from 'react-redux'
import uniqBy from 'lodash/uniqBy'

import { removeBookFromCart } from '../../store/actions/cart'
import { Header } from './Menu'

import { IMapStateToPropsMenuContainer, Cart } from '../../types'

const mapStateToProps = ({ cart }: Cart): IMapStateToPropsMenuContainer => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  totalBooks: cart.items.length,
  items: uniqBy(cart.items, (item) => item.id)
})

const ConnectedHeader = connect(mapStateToProps, { removeBookFromCart })(Header)

export { ConnectedHeader as MenuContainer }
