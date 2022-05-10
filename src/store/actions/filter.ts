import { SET_FILTER, SET_SEARCH } from '../../constants'

import { FilterActionTypes } from '../../types'

export const setFilter = (filter: string): FilterActionTypes => ({
  type: SET_FILTER,
  payload: filter
})

export const setSearch = (value: string): FilterActionTypes => ({
  type: SET_SEARCH,
  payload: value
})
