import { 
  SET_FILTER, 
  SET_SEARCH 
} from '../constants'

const initialState = {
  search: '',
  filteredBy: 'all'
}

const filter = (state = initialState, action) => {

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