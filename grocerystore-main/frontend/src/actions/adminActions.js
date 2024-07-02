import axios from 'axios'
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_PRODUCT_ADD_REQUEST,
  ADMIN_PRODUCT_ADD_SUCCESS,
  ADMIN_PRODUCT_ADD_FAIL,
} from '../constants/adminConstants'

// Admin Login Action
export const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/admin/login', { email, password }, config)

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('adminInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
// Admin Logout Action
export const adminLogout = () => (dispatch) => {
  localStorage.removeItem('adminInfo')
  dispatch({ type: ADMIN_LOGOUT })
}

// Admin Register Action
export const registerAdmin = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_REGISTER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/admin/register', { name, email, password }, config)

    dispatch({
      type: ADMIN_REGISTER_SUCCESS,
      payload: data,
    })

    localStorage.setItem('adminInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//add product

export const addProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_PRODUCT_ADD_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const admin = JSON.parse(localStorage.getItem("adminInfo"))

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${admin.token}`,
      },
    }

    const { data } = await axios.post('/api/admin/addproduct', product, config)

    dispatch({
      type: ADMIN_PRODUCT_ADD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}