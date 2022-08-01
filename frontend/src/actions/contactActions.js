import axios from 'axios'
import { logout } from './userActions'
export const createContact =
  ({ name, email, phone, message }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'CONTACT_REQUEST',
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/contact',
        { name, email, phone, message },
        config
      )

      dispatch({
        type: 'CONTACT_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'CONTACT_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
export const listContacts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'CONTACT_LIST_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/contact`, config)

    dispatch({
      type: 'CONTACT_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'CONTACT_LIST_FAIL',
      payload: message,
    })
  }
}

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'CONTACT_DELETE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/contact/${id}`, config)

    dispatch({ type: 'CONTACT_DELETE_SUCCESS' })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'CONTACT_DELETE_FAIL',
      payload: message,
    })
  }
}
