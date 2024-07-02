



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
  
  export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
        return { loading: true }
      case ADMIN_LOGIN_SUCCESS:
        return { loading: false, adminInfo: action.payload }
      case ADMIN_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      case ADMIN_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export const adminRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_REGISTER_REQUEST:
        return { loading: true }
      case ADMIN_REGISTER_SUCCESS:
        return { loading: false, adminInfo: action.payload }
      case ADMIN_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  

  export const adminProductAddReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_PRODUCT_ADD_REQUEST:
        return { loading: true }
      case ADMIN_PRODUCT_ADD_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case ADMIN_PRODUCT_ADD_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }