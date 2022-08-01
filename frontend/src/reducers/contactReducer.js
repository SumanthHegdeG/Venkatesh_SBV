export const createContactReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CONTACT_REQUEST':
      return { loading: true }
    case 'CONTACT_SUCCESS':
      return { loading: false, message: action.payload.message }
    case 'CONTACT_FAIL':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const contactListReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case 'CONTACT_LIST_REQUEST':
      return { loading: true }
    case 'CONTACT_LIST_SUCCESS':
      return { loading: false, contacts: action.payload }
    case 'CONTACT_LIST_FAIL':
      return { loading: false, error: action.payload }
    case 'CONTACT_LIST_RESET':
      return { users: [] }
    default:
      return state
  }
}

export const contactDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CONTACT_DELETE_REQUEST':
      return { loading: true }
    case 'CONTACT_DELETE_SUCCESS':
      return { loading: false, success: true }
    case 'CONTACT_DELETE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
