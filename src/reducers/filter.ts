import { 
  SET_FILTER, 
  SET_SEARCH 
} from '../constants'

import { FilterActionTypes } from '../types'

type stateItems = {
  search: string,
  filteredBy: string
}

const initialState: stateItems = {
  search: '',
  filteredBy: 'all'
}
//добавить типы с возврата функции
const filter = (state = initialState, action: FilterActionTypes) => {

  switch(action.type) {
    
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