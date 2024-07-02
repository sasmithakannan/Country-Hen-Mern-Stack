import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { addProduct } from '../actions/adminActions'
import FormContainer from '../components/FormContainer'

const AdminDashboardScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)

  const dispatch = useDispatch()

  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin

  const adminProductAdd = useSelector((state) => state.adminProductAdd)
  const { loading, error, success } = adminProductAdd

  useEffect(() => {
    if (!adminInfo) {
      history.push('/admin/login')
    }
  }, [history, adminInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addProduct({ name, price, description, image, brand, category, countInStock }))
    if (success) {
      history.push('/admin/productlist')
    }
  }

  return (
    <FormContainer>
      <h1>Add Product</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Product Added Successfully</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter product price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='image'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='brand'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='category'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='countInStock'>
          <Form.Label>Stock Count</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter stock count'
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Add Product
        </Button>
      </Form>
    </FormContainer>
  )
}

export default AdminDashboardScreen
