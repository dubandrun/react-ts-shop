import { SET_FILTER, SET_SEARCH } from '../../constants'
import { FILTER } from '../../enums'

import { FilterActionTypes } from '../../types'

type StateItems = {
  search: string,
  filteredBy: string
}

const initialState: StateItems = {
  search: '',
  filteredBy: FILTER.ALL
}

const filter = (state = initialState, action: FilterActionTypes): StateItems => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filteredBy: action.payload
      }
    }

    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload
      }
    }

    default:
      return state
  }
}

export default filter
