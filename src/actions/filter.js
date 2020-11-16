import { 
  SET_FILTER,
  SET_SEARCH 
} from '../constants'

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
})

export const setSearch = value => ({
  type: SET_SEARCH,
  payload: value
})